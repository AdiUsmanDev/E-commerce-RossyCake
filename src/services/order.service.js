// src/api/orders/order.service.js

import prisma from "../configs/db.js";
import { Error400, Error404, Error409 } from "../utils/customError.js";
import { res404 } from "../utils/response.js";

export const store = async (userId, orderData) => {
  const { items, ...shippingDetails } = orderData;

  const newOrder = await prisma.$transaction(async (tx) => {
    // ... (langkah 1 & 2: validasi produk, stok, dan hitung sub_total tetap sama) ...
    const productIds = items.map((item) => item.product_id);
    const productsInDb = await tx.products.findMany({
      where: { id: { in: productIds } },
    });

    if (productsInDb.length !== productIds.length) {
      throw new Error404("Satu atau lebih produk tidak ditemukan.");
    }

    let sub_total = 0;
    for (const item of items) {
      const product = productsInDb.find((p) => p.id === item.product_id);
      if (product.stock < item.quantity) {
        throw new Error400(
          `Stok untuk produk '${product.name}' tidak mencukupi.`
        );
      }
      sub_total += item.quantity * product.price;
    }

    // ================= LOGIKA VOUCHER DIPERBAIKI =================
    let discount_amount = 0;
    let voucherToApply = null; // Ubah nama variabel agar lebih jelas

    if (shippingDetails.voucher_id) {
      const voucher = await tx.vouchers.findUnique({
        where: { id: shippingDetails.voucher_id },
      });

      if (!voucher) throw new Error404("Voucher tidak ditemukan.");

      const now = new Date();
      if (now < voucher.valid_from || now > voucher.valid_until)
        throw new Error409("Voucher sudah tidak berlaku.");
      if (sub_total < voucher.min_purchase)
        throw new Error409(
          `Minimum pembelian untuk voucher ini adalah Rp ${voucher.min_purchase}.`
        );

      // PERUBAHAN 1: Hapus pengecekan kuota di sini.
      // Kita akan memindahkannya ke dalam operasi 'update' agar atomik.
      // if (voucher.current_usage >= voucher.usage_limit) ... (DIHAPUS)

      // Kalkulasi diskon (tetap sama)
      if (voucher.discount_type === "PERCENTAGE") {
        const calculatedDiscount =
          (Number(voucher.discount_value) / 100) * sub_total;
        discount_amount = voucher.max_discount
          ? Math.min(calculatedDiscount, Number(voucher.max_discount))
          : calculatedDiscount;
      } else {
        discount_amount = Number(voucher.discount_value);
      }
      voucherToApply = voucher;
    }
    // ================= AKHIR LOGIKA VOUCHER =================

    const total_price =
      sub_total + shippingDetails.shipping_cost - discount_amount;

    // Siapkan data order items
    const orderItemsData = items.map((item) => {
      const product = productsInDb.find((p) => p.id === item.product_id);
      return {
        product_id: item.product_id,
        quantity: item.quantity,
        price: product.price,
      };
    });

    // Buat order dan order_items
    const createdOrder = await tx.orders.create({
      data: {
        customer_id: userId,
        sub_total,
        shipping_cost: shippingDetails.shipping_cost,
        discount_amount,
        total_price,
        shipping_address: shippingDetails.shipping_address,
        shipping_method: shippingDetails.shipping_method,
        voucher_id: shippingDetails.voucher_id,
        order_items: { create: orderItemsData },
      },
    });

    // PERUBAHAN 2: Modifikasi logika update untuk menangani race condition

    // Siapkan promise untuk mengurangi stok
    const updateStockPromises = items.map((item) =>
      tx.products.update({
        where: { id: item.product_id },
        data: { stock: { decrement: item.quantity } },
      })
    );

    // Jalankan semua promise update stok
    await Promise.all(updateStockPromises);

    // Jalankan update voucher secara terpisah dan tangani errornya
    if (voucherToApply) {
      try {
        await tx.vouchers.update({
          where: {
            id: voucherToApply.id,
            // Tambahkan kondisi ini: HANYA update jika kuota masih tersedia
            current_usage: { lt: voucherToApply.usage_limit },
          },
          data: {
            current_usage: { increment: 1 },
          },
        });
      } catch (error) {
        // Jika error terjadi (karena kondisi 'where' tidak terpenuhi),
        // berarti kuota habis tepat saat akan diupdate.
        // Transaksi akan otomatis di-rollback oleh Prisma.
        throw new Error400(
          "Gagal menggunakan voucher, kuota mungkin sudah habis."
        );
      }
    }

    return createdOrder;
  });

  const finalOrder = await prisma.orders.findUnique({
    where: { id: newOrder.id },
    include: {
      order_items: { include: { product: true } },
    },
  });

  return finalOrder;
};

/**
 * Mendapatkan semua order (bisa untuk admin atau riwayat user)
 */
export const getAllOrders = async (userId) => {
  return await prisma.orders.findMany({
    where: { customer_id: userId }, // Filter berdasarkan user yg login
    include: { order_items: true },
    orderBy: { order_date: "desc" },
  });
};

/**
 * Mendapatkan satu order berdasarkan ID
 */
export const getOrderById = async (id, userId) => {
  const order = await prisma.orders.findUnique({
    where: { id: parseInt(id), customer_id: userId }, // Pastikan user hanya bisa akses order miliknya
    include: {
      order_items: { include: { product: true } },
      payment: true,
    },
  });

  if (!order) throw new Error404("Order tidak ditemukan.");
  return order;
};

/**
 * Memperbarui order (status atau nomor resi)
 */
export const updateOrderById = async (id, orderData) => {
  // Cek dulu apakah order ada
  const existingOrder = await prisma.orders.findUnique({
    where: { id: parseInt(id) },
  });
  if (!existingOrder) throw new Error404("Order tidak ditemukan.");

  return await prisma.orders.update({
    where: { id: parseInt(id) },
    data: orderData,
  });
};

/**
 * Menghapus order
 */
export const deleteOrderById = async (id) => {
  const existingOrder = await prisma.orders.findUnique({
    where: { id: parseInt(id) },
  });
  if (!existingOrder) throw new Error404("Order tidak ditemukan.");

  return await prisma.orders.delete({ where: { id: parseInt(id) } });
};
