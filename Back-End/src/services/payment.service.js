import { coreApi, snap } from "../configs/midtransClient.js";
import prisma from "../configs/db.js";
// import { createNotification } from "../services/notification.service.js";
// import * as FormatEmail from "../utils/formatPaymentEmail.js";
// import { sendPaymentEmail } from "../utils/sendPaymentEmail.js";
// import { generateQrCode } from "../utils/generateQrcode.js";
import { Error404 } from "../utils/customError.js";

export const createDebitPayment = async (orderId, bank) => {
  // 1. Ambil data order dari database dengan relasi yang diperlukan.
  // Pastikan order tersebut milik user yang benar dan statusnya masih menunggu pembayaran.
  const order = await prisma.orders.findUnique({
    where: {
      id: orderId,
    },
    include: {
      customer: true, // Relasi ke tabel 'users'
      order_items: {
        // Relasi ke 'order_items'
        include: {
          product: true, // Termasuk detail produk untuk `item_details`
        },
      },
    },
  });

  // Jika order tidak ditemukan, lempar error.
  if (!order) {
    throw new Error404("Pesanan tidak ditemukan atau sudah diproses.");
  }

  const item_details = order.order_items.map((item) => ({
    id: item.product_id,
    price: parseFloat(item.price),
    quantity: item.quantity,
    name: item.product.name.substring(0, 50),
  }));

  const gross_amount_benar = item_details.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const paymentParameter = {
    payment_type: "bank_transfer",
    transaction_details: {
      order_id: `ORDER-${order.id}-${Date.now()}`,
      gross_amount: gross_amount_benar,
    },
    // Ambil detail pelanggan dari relasi 'customer'.
    customer_details: {
      email: order.customer.email,
      first_name: order.customer.name,
      phone: order.customer.phone,
    },
    // Map setiap item di pesanan ke format `item_details` Midtrans.
    item_details: order.order_items.map((item) => ({
      id: item.product_id,
      name: item.product.name,
      price: Number(item.product.price),
      quantity: item.quantity,
    })),
    // Tentukan bank tujuan untuk VA.
    bank_transfer: {
      bank: bank,
    },
  };

  // 3. Kirim request 'charge' ke Midtrans.
  const chargeResponse = await coreApi.charge(paymentParameter);
  const vaNumber = chargeResponse.va_numbers?.[0]?.va_number || "N/A";

  // 4. Buat atau perbarui (upsert) catatan pembayaran di database kita.
  // Ini lebih aman daripada `create` karena menangani jika user mencoba membayar lagi.
  await prisma.payments.upsert({
    where: { order_id: order.id },
    update: {
      gateway_transaction_id: chargeResponse.transaction_id,
      payment_code: vaNumber,
      amount: parseFloat(chargeResponse.gross_amount),
      status: "PENDING",
      expires_at: new Date(chargeResponse.expiry_time),
    },
    create: {
      order_id: order.id,
      gateway_transaction_id: chargeResponse.transaction_id,
      amount: parseFloat(chargeResponse.gross_amount),
      status: "PENDING",
      payment_method: chargeResponse.payment_type,
      payment_gateway: "MIDTRANS",
      payment_code: vaNumber,
      expires_at: new Date(chargeResponse.expiry_time),
    },
  });

  return chargeResponse;
};

export const cancelPayment = async (midtransOrderId) => {
  // 1. Dapatkan status transaksi terbaru dari Midtrans
  const transactionStatus = await snap.transaction.status(midtransOrderId);

  // 2. Cek status saat ini
  if (transactionStatus.transaction_status === "cancel") {
    throw new Error404("Transaksi ini sudah dibatalkan sebelumnya.");
  }

  if (transactionStatus.transaction_status !== "pending") {
    throw new Error404(
      `Transaksi tidak dapat dibatalkan karena statusnya adalah: ${transactionStatus.transaction_status}.`
    );
  }

  // 3. Lakukan pembatalan di Midtrans
  const cancelResponse = await snap.transaction.cancel(midtransOrderId);

  // 4. Cari data pembayaran di database kita untuk mendapatkan detail order dan customer
  const paymentRecord = await prisma.payments.findFirst({
    where: {
      gateway_transaction_id: midtransOrderId,
    },
    include: {
      order: {
        include: {
          customer: true,
        },
      },
    },
  });

  if (!paymentRecord) {
    // Seharusnya tidak terjadi jika user sudah terotentikasi dengan benar
    throw new Error404("Data pembayaran tidak ditemukan di sistem.");
  }

  // 5. Gunakan transaksi untuk memperbarui status di beberapa tabel
  await prisma.$transaction(async (tx) => {
    // Update status pembayaran menjadi FAILED (atau CANCELLED sesuai preferensi)
    await tx.payments.update({
      where: { id: paymentRecord.id },
      data: { status: "FAILED" },
    });

    // Update status order menjadi CANCELLED
    await tx.orders.update({
      where: { id: paymentRecord.order_id },
      data: { status: "CANCELLED" },
    });
  });

  return cancelResponse;
};

export const checkPaymentStatus = async (midtransOrderId) => {
  // 1. Dapatkan status transaksi terbaru dari Midtrans
  const transactionStatus = await snap.transaction.status(midtransOrderId);
  const { transaction_status, fraud_status } = transactionStatus;

  // 2. Cari data pembayaran di database kita berdasarkan ID dari Midtrans.
  const paymentRecord = await prisma.payments.findFirst({
    where: { gateway_transaction_id: midtransOrderId },
    include: {
      order: {
        // Relasi ke 'orders'
        include: {
          customer: true, // Relasi dari 'orders' ke 'users' (customer)
        },
      },
    },
  });

  if (!paymentRecord) {
    throw new Error404("Pembayaran tidak ditemukan di sistem kami.");
  }

  // Ambil ID order dari sistem kita
  const localOrderId = paymentRecord.order.id;

  // 3. Gunakan blok transaksi untuk memperbarui beberapa tabel sekaligus secara aman.
  await prisma.$transaction(async (tx) => {
    let paymentStatus, orderStatus, notificationMessage;

    if (transaction_status === "settlement") {
      if (fraud_status === "accept") {
        // Pembayaran berhasil dan aman
        paymentStatus = "SUCCESS";
        orderStatus = "PROCESSING";
        notificationMessage = `Pembayaran Anda untuk pesanan ${midtransOrderId} telah berhasil.`;

        await tx.orders.update({
          where: { id: localOrderId },
          data: { status: orderStatus },
        });

        // Kirim notifikasi dan email hanya jika pembayaran berhasil.
        // await createNotification(paymentRecord.order.customer_id, "Payment Success", "Pembayaran Berhasil", notificationMessage);
        // await sendPaymentEmail(paymentRecord.order.customer.email, "Pembayaran Berhasil", { /* ... payload email ... */ });
      } else {
        // Transaksi dianggap mencurigakan oleh Midtrans
        paymentStatus = "FAILED";
        orderStatus = "CANCELLED"; // Batalkan order jika fraud
        notificationMessage = `Pembayaran Anda untuk pesanan ${midtransOrderId} ditolak karena terdeteksi anomali.`;

        await tx.orders.update({
          where: { id: localOrderId },
          data: { status: orderStatus },
        });
      }
    } else if (transaction_status === "pending") {
      // Pembayaran masih menunggu
      paymentStatus = "PENDING";
      notificationMessage = `Pesanan ${midtransOrderId} masih menunggu pembayaran.`;
    } else {
      // Status lainnya: cancel, deny, expire
      paymentStatus = "FAILED";
      orderStatus = "CANCELLED"; // Asumsikan order juga dibatalkan
      notificationMessage = `Pembayaran Anda untuk pesanan ${midtransOrderId} gagal atau telah kedaluwarsa.`;

      await tx.orders.update({
        where: { id: localOrderId },
        data: { status: orderStatus },
      });
    }

    // Selalu update status di tabel 'payments'
    await tx.payments.update({
      where: { id: paymentRecord.id },
      data: { status: paymentStatus },
    });
  });

  // 4. Kembalikan status asli dari Midtrans untuk informasi lebih lanjut jika diperlukan.
  return transactionStatus;
};

export const createGoPayPayment = async (orderId) => {
  // 1. Dapatkan detail order dari database
  const order = await prisma.orders.findUnique({
    where: {
      id: orderId,
    },
    include: {
      customer: true,
      order_items: { include: { product: true } },
    },
  });

  if (!order) {
    throw new Error404("Pesanan tidak ditemukan atau sudah diproses.");
  }

  const item_details = order.order_items.map((item) => ({
    id: item.product_id,
    price: parseFloat(item.price),
    quantity: item.quantity,
    name: item.product.name.substring(0, 50),
  }));

  const gross_amount_benar = item_details.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  // 2. Siapkan parameter untuk Midtrans
  const paymentParameter = {
    payment_type: "gopay",
    transaction_details: {
      order_id: `ORDER-${order.id}-${Date.now()}`,
      gross_amount: gross_amount_benar,
    },
    item_details: order.order_items.map((item) => ({
      id: item.product_id,
      name: item.product.name,
      price: Number(item.product.price),
      quantity: item.quantity,
    })),
    customer_details: {
      first_name: order.customer.name,
      email: order.customer.email,
      phone: order.customer.phone,
    },
  };

  // 3. Kirim request 'charge' ke Midtrans
  const chargeResponse = await coreApi.charge(paymentParameter);

  // 4. Ekstrak URL QR Code dan Deeplink dari respons Midtrans
  const qrCodeUrl = chargeResponse.actions?.find(
    (a) => a.name === "generate-qr-code"
  )?.url;
  const deeplinkUrl = chargeResponse.actions?.find(
    (a) => a.name === "deeplink-redirect"
  )?.url;

  // 5. Simpan catatan pembayaran ke database menggunakan 'upsert'
  await prisma.payments.upsert({
    where: { order_id: order.id },
    create: {
      order_id: order.id,
      gateway_transaction_id: chargeResponse.transaction_id,
      amount: parseFloat(chargeResponse.gross_amount),
      status: "PENDING",
      payment_method: "gopay",
      payment_gateway: "MIDTRANS",
      payment_url: qrCodeUrl || deeplinkUrl, // Simpan QR code atau deeplink
      expires_at: new Date(chargeResponse.expiry_time),
    },
    update: {
      gateway_transaction_id: chargeResponse.transaction_id,
      payment_url: qrCodeUrl || deeplinkUrl,
      expires_at: new Date(chargeResponse.expiry_time),
    },
  });

  // 6. (Opsional) Kirim notifikasi dan email
  const expiredDate = new Date(chargeResponse.expiry_time).toLocaleString(
    "id-ID"
  );

  return {
    transaction_id: chargeResponse.transaction_id,
    order_id: chargeResponse.order_id,
    gross_amount: chargeResponse.gross_amount,
    qr_code_url: qrCodeUrl,
    deeplink_url: deeplinkUrl,
    expiry_time: chargeResponse.expiry_time,
  };
};
