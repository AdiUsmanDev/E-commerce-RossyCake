// src/features/checkout/konfirmasi/CheckoutConfirmationPage.tsx

"use client";

import React, { useMemo } from "react";
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
import { useRouter, useNavigate, useParams } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import ShippingAddressReview from "./ShippingAddressReview";
import OrderedItemsSummary from "./OrderTotalsSummary";
import PaymentDetailsAndAction from "./PaymentDetailsAndAction";
import { getOrderById } from "@/services/order.service";
import { Order as OrderType } from "@/types/order.types";
import { checkPaymentStatus } from "@/services/payments.service";

const CheckoutConfirmationPage: React.FC = () => {
  const router = useRouter();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { id: idParam } = useParams({
    from: "/shop/checkout/$id",
  });
  const orderId = useMemo(() => parseInt(idParam, 10), [idParam]);

  // Query untuk mengambil data pesanan (tidak berubah)
  const {
    data: order,
    isLoading: isOrderLoading,
    isError: isOrderError,
    error: orderError,
  } = useQuery<OrderType>({
    queryKey: ["order", orderId],
    queryFn: () => getOrderById(orderId),
    enabled: !isNaN(orderId),
  });

  // PERBAIKAN: Mutasi baru untuk VERIFIKASI PEMBAYARAN
  const { mutate: verifyPayment, isPending: isVerifyingPayment } = useMutation({
    mutationFn: () =>
      checkPaymentStatus(order?.payment?.gateway_transaction_id as string), // pastikan id ada
    onSuccess: (paymentStatusData) => {
      // Perbarui query agar order terbaru di-fetch
      queryClient.invalidateQueries({ queryKey: ["order", orderId] });

      const isSettled = paymentStatusData.transaction_status === "settlement";

      if (isSettled) {
        navigate({ to: `/shop/checkout/order-success/${orderId}` });
      } else {
        alert(
          `Pembayaran belum dikonfirmasi. Status saat ini: ${paymentStatusData.transaction_status}. Silakan coba lagi dalam beberapa saat.`
        );
      }
    },
    onError: (err) => {
      console.error("Payment verification failed:", err);
      alert(`Gagal memverifikasi pembayaran: ${(err as Error).message}`);
    },
  });

  // --- HANDLER ---
  const handleConfirmAndPay = () => {
    // Panggil mutasi verifikasi, bukan update langsung
    verifyPayment();
  };

  const handleChangeAddress = () => {
    alert("Fungsi ubah alamat belum diimplementasikan.");
  };

  // --- RENDER LOGIC ---

  // Tampilan Loading
  if (isOrderLoading) {
    return (
      <GuestLayouts>
        <div className="container mx-auto flex justify-center items-center min-h-[calc(100vh-10rem)]">
          <LoaderCircle className="h-12 w-12 animate-spin text-sky-600" />
          <p className="ml-4 text-muted-foreground">Memuat detail pesanan...</p>
        </div>
      </GuestLayouts>
    );
  }

  // Tampilan Error
  if (isOrderError || !order) {
    return (
      <GuestLayouts>
        <div className="container mx-auto px-4 py-20 text-center">
          <ServerCrash className="mx-auto h-16 w-16 text-destructive mb-4" />
          <h1 className="text-2xl font-semibold mb-2">Gagal Memuat Pesanan</h1>
          <p className="text-muted-foreground mb-6">
            {(orderError as Error)?.message ||
              "Pesanan tidak ditemukan atau terjadi kesalahan."}
          </p>
          <Button onClick={() => router.history.go(-1)}>Kembali</Button>
        </div>
      </GuestLayouts>
    );
  }

  // Jika data berhasil dimuat, render halaman utama
  return (
    <GuestLayouts>
      <div className="container mx-auto px-2 sm:px-4 py-6">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.history.go(-1)}
                className="text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft size={16} className="mr-1.5" />
                Kembali
              </Button>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop/cart">Keranjang</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
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
                onChangeAddress={handleChangeAddress}
              />
              <OrderedItemsSummary items={order.order_items || []} />
            </div>
            <div className="lg:col-span-1">
              {/* PERBAIKAN: Teruskan state dan handler yang baru */}
              <PaymentDetailsAndAction
                order={order}
                isProcessing={isVerifyingPayment} // Gunakan state loading dari mutasi verifikasi
                onConfirmAndPay={handleConfirmAndPay}
              />
            </div>
          </div>
        )}
      </div>
    </GuestLayouts>
  );
};
export default CheckoutConfirmationPage;
