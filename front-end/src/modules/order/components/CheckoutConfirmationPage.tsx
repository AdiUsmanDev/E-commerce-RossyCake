// src/features/checkout/konfirmasi/CheckoutConfirmationPage.tsx

"use client";

import React, { useMemo, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft, LoaderCircle, ServerCrash } from "lucide-react";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import ShippingAddressReview from "./ShippingAddressReview";
import OrderedItemsSummary from "./OrderTotalsSummary";
import PaymentDetailsAndAction from "./PaymentDetailsAndAction";
import { getOrderById } from "@/services/order.service";
import { Order as OrderType } from "@/types/order.types";
import { checkPaymentStatus } from "@/services/payments.service";

// --- Konstanta untuk Pengaturan Polling ---
const PAYMENT_CHECK_INTERVAL_MS = 10000; // Cek setiap 10 detik
const MAX_POLLING_ATTEMPTS = 30; // Maksimal 30 kali percobaan (sekitar 5 menit)

const CheckoutConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { id: idParam } = useParams({ from: "/shop/checkout/$id" });
  const orderId = useMemo(() => parseInt(idParam, 10), [idParam]);

  const {
    data: order,
    isLoading: isOrderLoading,
    isError: isOrderError,
    error: orderError,
  } = useQuery<OrderType>({
    queryKey: ["order", orderId],
    queryFn: () => getOrderById(orderId),
    enabled: !isNaN(orderId),
    refetchOnWindowFocus: false,
  });

  const handleVerificationSuccess = useCallback(() => {
    // Navigasi ke halaman sukses setelah jeda singkat agar notifikasi terlihat
    setTimeout(() => {
      navigate({ to: `/shop/checkout/order-success/${orderId}` });
    }, 1500);
  }, [navigate, orderId]);

  // --- Efek untuk memulai polling otomatis saat halaman dimuat ---
  useEffect(() => {
    // Jangan lakukan apapun jika data order belum siap atau pembayaran sudah lunas
    if (!order || order.payment?.status === "settlement") {
      return;
    }

    const { gateway_transaction_id } = order.payment || {};
    if (!gateway_transaction_id) return;

    // Membuat Promise yang membungkus logika polling
    const pollingPromise = new Promise<string>((resolve, reject) => {
      let attempts = 0;

      const intervalId = setInterval(async () => {
        try {
          if (attempts >= MAX_POLLING_ATTEMPTS) {
            clearInterval(intervalId);
            reject(
              new Error(
                "Waktu verifikasi habis. Silakan coba lagi secara manual."
              )
            );
            return;
          }

          const statusResult = await checkPaymentStatus(gateway_transaction_id);

          if (statusResult.transaction_status === "settlement") {
            clearInterval(intervalId);
            // Segarkan data sebelum resolve
            await queryClient.invalidateQueries({
              queryKey: ["order", orderId],
            });
            resolve(`Pembayaran untuk pesanan #${orderId} berhasil!`);
          }
          // Jika belum, biarkan interval berjalan untuk percobaan berikutnya
        } catch (err) {
          clearInterval(intervalId);
          reject(err); // Kirim eror dari API
        }
        attempts++;
      }, PAYMENT_CHECK_INTERVAL_MS);
    });

    // Gunakan toast.promise dengan Promise polling kita
    toast.promise(pollingPromise, {
      loading: "Menunggu konfirmasi pembayaran...",
      success: (message) => {
        handleVerificationSuccess();
        return message; // Tampilkan pesan sukses dari 'resolve'
      },
      error: (err) => err.message || "Gagal memverifikasi pembayaran.",
    });

    // Fungsi cleanup tidak diperlukan di sini karena interval sudah di-clear di dalam promise
  }, [order, orderId, queryClient, handleVerificationSuccess]);

  // --- Handler untuk tombol verifikasi manual ---
  const handleManualVerification = () => {
    if (!order?.payment?.gateway_transaction_id) {
      toast.error("ID Transaksi tidak ditemukan.");
      return;
    }

    // Buat promise untuk satu kali pengecekan
    const manualCheckPromise = checkPaymentStatus(
      order.payment.gateway_transaction_id
    ).then(async (statusResult) => {
      // Segarkan data setelah pengecekan
      await queryClient.invalidateQueries({ queryKey: ["order", orderId] });
      if (statusResult.transaction_status === "settlement") {
        return `Pembayaran untuk pesanan #${orderId} berhasil!`;
      } else {
        // Jika belum lunas, berikan statusnya
        throw new Error(
          `Pembayaran belum selesai. Status saat ini: ${statusResult.transaction_status}`
        );
      }
    });

    toast.promise(manualCheckPromise, {
      loading: "Memverifikasi pembayaran...",
      success: (message) => {
        handleVerificationSuccess();
        return message;
      },
      error: (err) => err.message || "Verifikasi gagal.",
    });
  };

  // --- Render Logic ---
  if (isOrderLoading) {
    return (
      <GuestLayouts>
        <div className="container mx-auto flex justify-center items-center min-h-[calc(100vh-10rem)]">
          <LoaderCircle className="h-12 w-12 animate-spin text-sky-600" />
        </div>
      </GuestLayouts>
    );
  }

  if (isOrderError || !order) {
    return (
      <GuestLayouts>
        <div className="container mx-auto px-4 py-20 text-center">
          <ServerCrash className="mx-auto h-16 w-16 text-destructive mb-4" />
          <h1 className="text-2xl font-semibold mb-2">Gagal Memuat Pesanan</h1>
          <p className="text-muted-foreground mb-6">
            {(orderError as Error)?.message || "Pesanan tidak ditemukan."}
          </p>
          <Button onClick={() => navigate({ to: "/shop" })}>
            Kembali ke Toko
          </Button>
        </div>
      </GuestLayouts>
    );
  }

  return (
    <GuestLayouts>
      <div className="container mx-auto px-2 sm:px-4 py-6">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate({ to: -1 })}
                className="text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft size={16} className="mr-1.5" />
                Kembali
              </Button>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop/cart">Keranjang</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Konfirmasi Pembayaran #{order.id}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
          Konfirmasi Pesanan & Pembayaran
        </h1>
        {order.shipping_address && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <ShippingAddressReview
                address={order.shipping_address}
                onChangeAddress={() =>
                  toast.info("Fitur ubah alamat belum tersedia.", {
                    icon: "🚧",
                  })
                }
              />
              <OrderedItemsSummary items={order.order_items || []} />
            </div>
            <div className="lg:col-span-1">
              <PaymentDetailsAndAction
                order={order}
                isProcessing={false} // Loading state sekarang ditangani oleh toast
                onConfirmAndPay={handleManualVerification}
              />
            </div>
          </div>
        )}
      </div>
    </GuestLayouts>
  );
};

export default CheckoutConfirmationPage;
