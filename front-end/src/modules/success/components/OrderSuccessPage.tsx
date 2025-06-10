// src/app/order-success/OrderSuccessPage.tsx

"use client";

import React, { useMemo } from "react";
import { useParams, useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import { LoaderCircle, ServerCrash } from "lucide-react";
import { Button } from "@/components/ui/button";

// Impor komponen-komponen anak
import { SuccessHeader } from "./SuccessHeader";
import { OrderSummaryCard } from "./OrderSummaryCard";
import { NextStepsActions } from "./NextStepsActions";

// Impor service dan tipe data yang relevan
import { getOrderById } from "@/services/order.service";
import { Order as OrderType } from "@/types/order.types";

const OrderSuccessPage: React.FC = () => {
  const router = useRouter();
  // Mengambil orderId dari parameter URL
  const { orderId: orderIdParam } = useParams({
    from: "/shop/checkout/order-success/$orderId",
  });
  const orderId = useMemo(() => parseInt(orderIdParam, 10), [orderIdParam]);

  // Menggunakan useQuery untuk mengambil detail pesanan secara deklaratif
  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery<OrderType>({
    queryKey: ["order", orderId], // Kunci unik untuk query ini
    queryFn: () => getOrderById(orderId), // Fungsi untuk mengambil data
    enabled: !isNaN(orderId), // Hanya jalankan jika orderId valid
    retry: 1, // Hanya coba lagi sekali jika gagal
  });

  // Tampilan saat data sedang dimuat
  if (isLoading) {
    return (
      <GuestLayouts>
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center">
          <LoaderCircle className="h-16 w-16 text-sky-600 animate-spin mb-4" />
          <h2 className="text-xl font-semibold">
            Memuat Detail Pesanan Anda...
          </h2>
        </div>
      </GuestLayouts>
    );
  }

  // Tampilan saat terjadi error atau pesanan tidak ditemukan
  if (isError || !order) {
    return (
      <GuestLayouts>
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center">
          <ServerCrash className="h-16 w-16 text-destructive mb-4" />
          <h2 className="text-xl font-semibold text-destructive">
            Terjadi Kesalahan
          </h2>
          <p className="text-muted-foreground mt-2">
            {(error as Error)?.message ||
              "Gagal memuat detail pesanan. Silakan coba lagi nanti."}
          </p>
          <Button onClick={() => router.history.back()} className="mt-6">
            Kembali
          </Button>
        </div>
      </GuestLayouts>
    );
  }

  // Tampilan utama jika data berhasil dimuat
  return (
    <GuestLayouts>
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col items-center gap-8">
          <SuccessHeader
            title="Pembayaran Berhasil!"
            message={`Terima kasih atas pesanan Anda. Kami telah menerima pembayaran dan pesanan #${order.id} sedang kami proses.`}
          />
          {/* Asumsi OrderSummaryCard dan NextStepsActions sudah disesuaikan untuk menerima props 'order' */}
          <OrderSummaryCard order={order} />
          <NextStepsActions />
        </div>
      </div>
    </GuestLayouts>
  );
};

export default OrderSuccessPage;
