"use client";

import React, { useMemo } from "react";
import { useQueries } from "@tanstack/react-query";
import {
  IconArchive,
  IconBuildingWarehouse,
  IconDiscount2,
  IconHourglass,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Impor semua service dan tipe data yang dibutuhkan
import { getProducts } from "@/services/product.service";

import { getAllOrders } from "@/services/order.service";

import { Product } from "@/types/product.types";

import { Order } from "@/types/order.types";
import { getAllRawMaterials } from "@/services/RawMaterials.service";
import { getAllVouchers } from "@/services/vocher.service";
import { getAllUsers } from "@/services/users.service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-select";

// Komponen Kartu Indikator (sudah baik, hanya sedikit penyesuaian)
const IndicatorCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  mainValue: string | number;
  mainLabel: string;
  subValue?: string | number;
  subLabel?: string;
  colorClass?: string;
  isLoading?: boolean;
}> = ({
  title,
  icon,
  mainValue,
  mainLabel,
  subValue,
  subLabel,
  colorClass = "text-sky-400",
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg animate-pulse">
        <div className="h-6 bg-gray-200 dark:bg-neutral-700 rounded w-1/2 mb-4"></div>
        <div className="h-10 bg-gray-200 dark:bg-neutral-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-full mb-4"></div>
        <div className="h-px bg-gray-200 dark:bg-neutral-700 my-2"></div>
        <div className="h-6 bg-gray-200 dark:bg-neutral-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-1/3 mt-1"></div>
      </div>
    );
  }
  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
          {title}
        </h3>
        <div
          className={`p-2 rounded-full bg-opacity-20 ${colorClass.replace("text-", "bg-").replace("dark:text-", "dark:bg-")}`}
        >
          {React.cloneElement(icon as React.ReactElement, {
            size: 24,
            className: colorClass,
          })}
        </div>
      </div>
      <p className={`text-3xl font-bold ${colorClass}`}>{mainValue}</p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
        {mainLabel}
      </p>
      {subValue !== undefined && subLabel && (
        <>
          <Separator className="my-2 dark:bg-neutral-700" />
          <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            {subValue}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            {subLabel}
          </p>
        </>
      )}
    </div>
  );
};

// Komponen Baru untuk Ringkasan Keuangan
const FinanceManagementPanel: React.FC<{
  orders: Order[];
  isLoading: boolean;
}> = ({ orders, isLoading }) => {
  const formatCurrency = (amount: number | string) => {
    // 1. Ubah input menjadi angka, parseFloat akan mengabaikan karakter non-numerik.
    const numericAmount =
      typeof amount === "string" ? parseFloat(amount) : amount;

    // 2. Periksa apakah hasilnya adalah angka yang valid.
    if (isNaN(numericAmount)) {
      // Jika tidak valid, kembalikan nilai default.
      return "Rp 0";
    }

    // 3. Jika valid, format angka murni tersebut.
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(numericAmount);
  };

  const { paidStats, pendingStats } = useMemo(() => {
    const paid = { count: 0, amount: 0 };
    const pending = { count: 0, amount: 0 };

    orders.forEach((order) => {
      // PERBAIKAN: Ubah string menjadi angka sebelum menjumlahkan
      const priceAsNumber = parseFloat(order.total_price);

      if (order.status === "PENDING_PAYMENT") {
        pending.count++;
        pending.amount += priceAsNumber;
      } else if (order.status !== "CANCELLED") {
        paid.count++;
        paid.amount += priceAsNumber;
      }
    });

    return { paidStats: paid, pendingStats: pending };
  }, [orders]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg animate-pulse h-40"></div>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg animate-pulse h-40"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="dark:bg-neutral-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pendapatan Terkonfirmasi
          </CardTitle>
          <IconTrendingUp className="h-5 w-5 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-500">
            {formatCurrency(paidStats.amount)}
          </div>
          <p className="text-xs text-muted-foreground">
            dari {paidStats.count} pesanan lunas
          </p>
        </CardContent>
      </Card>
      <Card className="dark:bg-neutral-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Menunggu Pembayaran
          </CardTitle>
          <IconHourglass className="h-5 w-5 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-yellow-500">
            {formatCurrency(pendingStats.amount)}
          </div>
          <p className="text-xs text-muted-foreground">
            dari {pendingStats.count} pesanan belum lunas
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

// Komponen Utama Dashboard
const DashboardOverviewPage: React.FC = () => {
  const results = useQueries({
    queries: [
      { queryKey: ["products"], queryFn: getProducts },
      { queryKey: ["rawMaterials"], queryFn: getAllRawMaterials },
      { queryKey: ["vouchers"], queryFn: getAllVouchers },
      { queryKey: ["users"], queryFn: getAllUsers },
      { queryKey: ["allOrders"], queryFn: getAllOrders },
    ],
  });

  const isLoading = results.some((query) => query.isLoading);
  const products: Product[] = results[0].data || [];
  const rawMaterials: RawMaterial[] = results[1].data || [];
  const vouchers: Voucher[] = results[2].data || [];
  const users: User[] = results[3].data || [];
  const orders: Order[] = results[4].data || [];

  const stats = useMemo(
    () => ({
      totalProducts: products.length,
      lowStockProducts: products.filter((p) => p.stock < 10).length,
      totalRawMaterials: rawMaterials.length,
      lowStockRawMaterials: rawMaterials.filter(
        (m) => m.stock < m.reorder_level
      ).length,
      activeVouchers: vouchers.filter(
        (v) => new Date(v.valid_until) >= new Date()
      ).length,
      totalUsers: users.length,
    }),
    [products, rawMaterials, vouchers, users]
  );

  return (
    <div className="flex flex-col gap-8 p-4 md:p-6 lg:p-8 w-full">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Dashboard Ringkasan
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Panel Keuangan Baru */}
      <FinanceManagementPanel orders={orders} isLoading={isLoading} />

      {/* Kartu Indikator Lainnya */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <IndicatorCard
          isLoading={isLoading}
          title="Ringkasan Produk"
          icon={<IconArchive />}
          mainValue={stats.totalProducts}
          mainLabel="Total Jenis Produk"
          subValue={`${stats.lowStockProducts} Stok Rendah`}
          subLabel={
            stats.lowStockProducts > 0 ? "Segera restock!" : "Stok aman"
          }
          colorClass="text-blue-500 dark:text-blue-400"
        />
        <IndicatorCard
          isLoading={isLoading}
          title="Status Bahan Baku"
          icon={<IconBuildingWarehouse />}
          mainValue={stats.totalRawMaterials}
          mainLabel="Total Jenis Bahan"
          subValue={`${stats.lowStockRawMaterials} Stok Rendah`}
          subLabel={
            stats.lowStockRawMaterials > 0 ? "Perlu pengadaan" : "Stok aman"
          }
          colorClass="text-cyan-500 dark:text-cyan-400"
        />
        <IndicatorCard
          isLoading={isLoading}
          title="Diskon & Voucher"
          icon={<IconDiscount2 />}
          mainValue={stats.activeVouchers}
          mainLabel="Voucher Aktif"
          subValue={`${vouchers.length} Total Voucher`}
          subLabel="Dikelola oleh admin"
          colorClass="text-orange-500 dark:text-orange-400"
        />
        <IndicatorCard
          isLoading={isLoading}
          title="Manajemen Pengguna"
          icon={<IconUsers />}
          mainValue={stats.totalUsers}
          mainLabel="Total Pengguna"
          subValue={`${users.filter((u) => u.role === "ADMIN").length} Admin`}
          subLabel={`${users.filter((u) => u.role === "CUSTOMER").length} Pelanggan`}
          colorClass="text-purple-500 dark:text-purple-400"
        />
      </div>
    </div>
  );
};

export default DashboardOverviewPage;
