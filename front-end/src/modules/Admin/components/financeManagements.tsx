"use client";

import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconSearch,
  IconTrendingUp,
  IconHourglass,
  IconFileInvoice,
  IconServerOff,
} from "@tabler/icons-react";
import { LoaderCircle } from "lucide-react";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import { useNavigate } from "@tanstack/react-router";

// Impor service dan tipe data yang relevan
import { getAllOrders } from "@/services/order.service";
import { Order } from "@/types/order.types";

// Helper Functions
const formatCurrency = (amount: number | string) => {
  const numericAmount =
    typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numericAmount)) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(numericAmount);
};

const formatDate = (dateString: string | Date) => {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const formatStatus = (status: string) => {
  return status
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// Komponen untuk ringkasan di atas tabel
const FinanceSummaryCards: React.FC<{
  orders: Order[];
  isLoading: boolean;
}> = ({ orders, isLoading }) => {
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
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg animate-pulse h-32"></div>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg animate-pulse h-32"></div>
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

const FinanceManagementPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useQuery<Order[]>({
    queryKey: ["allOrdersForFinance"],
    queryFn: getAllOrders,
  });

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const matchesSearch =
        order.id.toString().includes(lowerCaseQuery) ||
        order.shipping_address.recipient.toLowerCase().includes(lowerCaseQuery);

      if (activeTab === "all") return matchesSearch;
      if (activeTab === "paid")
        return (
          order.status !== "PENDING_PAYMENT" &&
          order.status !== "CANCELLED" &&
          matchesSearch
        );
      if (activeTab === "pending")
        return order.status === "PENDING_PAYMENT" && matchesSearch;

      return false;
    });
  }, [orders, activeTab, searchQuery]);

  const handleViewOrder = (orderId: number) => {
    // Arahkan ke halaman detail pesanan jika ada
    navigate({ to: `/shop/checkout/order-success/${orderId}` });
  };

  if (isLoading) {
    return (
      <GuestLayouts>
        <div className="flex justify-center items-center min-h-screen">
          <LoaderCircle className="h-12 w-12 animate-spin" />
        </div>
      </GuestLayouts>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <IconServerOff className="h-12 w-12 text-destructive" />
        <p className="mt-4 font-semibold text-destructive">
          Gagal Memuat Data Keuangan
        </p>
        <p className="text-sm text-muted-foreground">
          {(error as Error).message}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-4 md:p-6 lg:p-8 w-full">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Manajemen Keuangan
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Keuangan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <FinanceSummaryCards orders={orders} isLoading={isLoading} />

      <Card className="dark:bg-neutral-800">
        <CardHeader>
          <CardTitle>Daftar Transaksi</CardTitle>
          <CardDescription>
            Lihat semua transaksi yang masuk, baik yang sudah lunas maupun yang
            masih menunggu pembayaran.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <TabsList>
                <TabsTrigger value="all">Semua</TabsTrigger>
                <TabsTrigger value="paid">Lunas</TabsTrigger>
                <TabsTrigger value="pending">Belum Lunas</TabsTrigger>
              </TabsList>
              <div className="relative w-full sm:w-auto sm:max-w-xs">
                <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
                <Input
                  type="search"
                  placeholder="Cari ID Pesanan / Nama..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <ScrollArea className="h-[45vh] w-full mt-4">
              <Table>
                <TableHeader className="sticky top-0 bg-background z-10">
                  <TableRow>
                    <TableHead>ID Pesanan</TableHead>
                    <TableHead>Nama Pelanggan</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-mono">#{order.id}</TableCell>
                        <TableCell className="font-medium">
                          {order.shipping_address.recipient}
                        </TableCell>
                        <TableCell>{formatDate(order.order_date)}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full capitalize ${order.status === "PENDING_PAYMENT" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
                          >
                            {formatStatus(order.status)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          {formatCurrency(order.total_price)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewOrder(order.id)}
                          >
                            <IconFileInvoice className="h-4 w-4 mr-2" /> Lihat
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center h-24">
                        Tidak ada transaksi yang cocok.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </ScrollArea>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinanceManagementPage;
