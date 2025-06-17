// src/app/order-success/OrderSuccessPage.tsx

"use client";

import React, { useMemo, useRef } from "react";
import { useParams, useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useReactToPrint } from "react-to-print"; // Impor hook
import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import { LoaderCircle, ServerCrash } from "lucide-react";
import { Button } from "@/components/ui/button";

// Impor komponen-komponen anak
import { SuccessHeader } from "./SuccessHeader";
import { NextStepsActions } from "./NextStepsActions";

// Impor service dan tipe data yang relevan
import { getOrderById } from "@/services/order.service";
import { Order as OrderType } from "@/types/order.types";
import { OrderReceipt } from "./OrderReceipt";
import ReceiptActions from "./ReceiptActions";

const OrderSuccessPage: React.FC = () => {
  const router = useRouter();
  const { orderId: orderIdParam } = useParams({
    from: "/shop/checkout/order-success/$orderId",
  });
  const orderId = useMemo(() => parseInt(orderIdParam, 10), [orderIdParam]);

  const receiptRef = useRef<HTMLDivElement>(null);

  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery<{ data: OrderType }>({
    queryKey: ["order", orderId],
    queryFn: () => getOrderById(orderId),
    enabled: !isNaN(orderId),
    retry: 1,
  });

  // Gunakan hook useReactToPrint untuk membuat fungsi print
  const handlePrint = useReactToPrint({
    content: () => receiptRef.current,
    documentTitle: `struk-pesanan-${order?.id || "order"}`,
    onAfterPrint: () => console.log("Struk selesai dicetak."),
  });

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

  const orderData = order;
  console.log(receiptRef);

  return (
    <GuestLayouts>
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col items-center gap-8">
          <SuccessHeader
            title="Pembayaran Berhasil!"
            message={`Terima kasih atas pesanan Anda. Kami telah menerima pembayaran dan pesanan #${orderData.id} sedang kami proses.`}
          />

          <OrderReceipt order={order} ref={receiptRef} />
          {/* Teruskan fungsi handlePrint ke komponen anak */}
          {/* <ReceiptActions
            receiptRef={receiptRef}
            order={orderData}
            handlePrint={handlePrint}
          /> */}

          <NextStepsActions />
        </div>
      </div>
    </GuestLayouts>
  );
};

export default OrderSuccessPage;
