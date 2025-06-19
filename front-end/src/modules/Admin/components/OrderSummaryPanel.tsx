// src/components/admin/dashboard/OrderSummaryPanel.tsx

"use client";

import React, { useMemo } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  IconChecklist,
  IconCircleCheck,
  IconPackage,
  IconTruck,
} from "@tabler/icons-react";
import { Order } from "@/types/order.types"; // Pastikan path tipe data sudah benar

// Tipe untuk props komponen
interface OrderSummaryPanelProps {
  orders: Order[];
  isLoading: boolean;
}

// Komponen untuk menampilkan satu metrik
const StatItem: React.FC<{
  icon: React.ReactNode;
  value: number;
  label: string;
  className?: string;
}> = ({ icon, value, label, className }) => (
  <div className="flex items-start gap-4">
    <div className={`mt-1 ${className}`}>{icon}</div>
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  </div>
);

// Komponen Panel Utama
export const OrderSummaryPanel: React.FC<OrderSummaryPanelProps> = ({
  orders,
  isLoading,
}) => {
  const orderStats = useMemo(() => {
    let totalPaidOrders = 0;
    let processingCount = 0;
    let shippedCount = 0;
    let completedCount = 0;

    // Hanya proses jika orders ada isinya
    if (Array.isArray(orders)) {
      orders.forEach((order) => {
        // Hanya hitung pesanan yang sudah dibayar (bukan PENDING atau CANCELLED)
        if (
          order.status !== "PENDING_PAYMENT" &&
          order.status !== "CANCELLED"
        ) {
          totalPaidOrders++;
          switch (order.status) {
            case "PROCESSING":
              processingCount++;
              break;
            case "SHIPPED":
              shippedCount++;
              break;
            case "COMPLETED":
              completedCount++;
              break;
          }
        }
      });
    }

    return { totalPaidOrders, processingCount, shippedCount, completedCount };
  }, [orders]);

  if (isLoading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-neutral-700"></div>
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-neutral-700 mt-2"></div>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-16 rounded bg-gray-200 dark:bg-neutral-700"></div>
          <div className="h-16 rounded bg-gray-200 dark:bg-neutral-700"></div>
          <div className="h-16 rounded bg-gray-200 dark:bg-neutral-700"></div>
          <div className="h-16 rounded bg-gray-200 dark:bg-neutral-700"></div>
        </CardContent>
        <CardFooter>
          <div className="h-10 w-36 rounded bg-gray-200 dark:bg-neutral-700"></div>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="dark:bg-neutral-800 shadow-md">
      <CardHeader>
        <CardTitle>Ringkasan Pesanan</CardTitle>
        <CardDescription>
          Status terkini dari semua pesanan yang telah dibayar.
        </CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          <StatItem
            icon={<IconChecklist size={28} />}
            value={orderStats.totalPaidOrders}
            label="Total Pesanan Masuk"
            className="text-primary"
          />
          <StatItem
            icon={<IconPackage size={28} />}
            value={orderStats.processingCount}
            label="Perlu Diproses"
            className="text-orange-500"
          />
          <StatItem
            icon={<IconTruck size={28} />}
            value={orderStats.shippedCount}
            label="Sedang Dikirim"
            className="text-blue-500"
          />
          <StatItem
            icon={<IconCircleCheck size={28} />}
            value={orderStats.completedCount}
            label="Selesai"
            className="text-green-500"
          />
        </div>
      </CardContent>
    </Card>
  );
};
