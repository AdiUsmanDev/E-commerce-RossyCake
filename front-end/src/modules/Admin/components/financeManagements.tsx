"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  IconUser,
  IconMapPin,
  IconPhone,
  IconMail,
  IconTruck,
  IconPackageExport,
} from "@tabler/icons-react";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";

import {
  getAllOrders,
  getOrderAdmin,
  updateOrder,
} from "@/services/order.service";
import { Order, UpdateOrderDTO } from "@/types/order.types";

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

const ORDER_STATUSES = [
  "PROCESSING",
  "SHIPPED",
  "COMPLETED",
  "CANCELLED",
];

// Komponen Detail Pesanan untuk Dialog
const OrderDetailDialog: React.FC<{
  orderId: number;
  onUpdateSuccess: () => void;
}> = ({ orderId, onUpdateSuccess }) => {
  const queryClient = useQueryClient();
  const [newStatus, setNewStatus] = useState<string>("");
  const [trackingNumber, setTrackingNumber] = useState<string | null>("");

  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orderAdmin", orderId],
    queryFn: () => getOrderAdmin(orderId),
    enabled: !!orderId,
  });

  useEffect(() => {
    if (order) {
      setNewStatus(order.status);
      setTrackingNumber(order.tracking_number);
    }
  }, [order]);

  const updateOrderMutation = useMutation({
    mutationFn: (data: { orderId: number; updateData: UpdateOrderDTO }) =>
      updateOrder(data.orderId, data.updateData),
    onSuccess: () => {
      // Invalidate queries to refetch data
      queryClient.invalidateQueries({ queryKey: ["orderAdmin", orderId] });
      queryClient.invalidateQueries({ queryKey: ["allOrdersForFinance"] });
      onUpdateSuccess();
    },
  });

  const handleUpdateStatus = () => {
    const updateData: UpdateOrderDTO = { status: newStatus };
    if (newStatus === "SHIPPED") {
      updateData.tracking_number = trackingNumber;
    }

    toast.promise(updateOrderMutation.mutateAsync({ orderId, updateData }), {
      loading: "Memperbarui status...",
      success: <b>Status pesanan berhasil diperbarui!</b>,
      error: <b>Gagal memperbarui status.</b>,
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoaderCircle className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-10">
        <p>Gagal memuat detail pesanan.</p>
        <p className="text-sm">{(error as Error).message}</p>
      </div>
    );
  }

  if (!order) return null;

  return (
    <ScrollArea className="max-h-[80vh]">
      <div className="p-1 pr-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <IconUser size={18} /> Detail Pelanggan
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p className="flex items-center gap-2">
                <IconUser size={16} className="text-muted-foreground" />
                <span>{order.shipping_address.recipient}</span>
              </p>
              <p className="flex items-center gap-2">
                <IconPhone size={16} className="text-muted-foreground" />
                <span>{order.shipping_address.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <IconMail size={16} className="text-muted-foreground" />
                <span>{order.payment?.customer_email || "Tidak ada email"}</span>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <IconMapPin size={18} /> Alamat Pengiriman
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                {order.shipping_address.street}, {order.shipping_address.city}
              </p>
              <p>{order.shipping_address.details}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Item Pesanan</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produk</TableHead>
                  <TableHead className="text-center">Jumlah</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.order_items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.product?.name || 'Produk Dihapus'}</TableCell>
                    <TableCell className="text-center">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(parseFloat(item.price) * item.quantity)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="w-full mt-4 pt-4 border-t flex justify-end">
              <div className="w-full max-w-xs space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(order.sub_total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ongkos Kirim</span>
                  <span>{formatCurrency(order.shipping_cost)}</span>
                </div>
                <div className="flex justify-between font-bold text-base mt-2">
                  <span>Grand Total</span>
                  <span>{formatCurrency(order.total_price)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconPackageExport size={20} /> Perbarui Status Pesanan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="status" className="text-sm font-medium">
                Status
              </label>
              <Select value={newStatus} onValueChange={setNewStatus}>
                <SelectTrigger id="status" className="mt-1">
                  <SelectValue placeholder="Pilih status baru" />
                </SelectTrigger>
                <SelectContent>
                  {ORDER_STATUSES.map((status) => (
                    <SelectItem key={status} value={status}>
                      {formatStatus(status)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {newStatus === "SHIPPED" && (
              <div>
                <label htmlFor="tracking_number" className="text-sm font-medium">
                  Nomor Resi
                </label>
                <Input
                  id="tracking_number"
                  value={trackingNumber || ""}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Masukkan nomor resi pengiriman"
                  className="mt-1"
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              onClick={handleUpdateStatus}
              disabled={updateOrderMutation.isPending}
            >
              {updateOrderMutation.isPending && (
                <LoaderCircle className="h-4 w-4 mr-2 animate-spin" />
              )}
              Perbarui Status
            </Button>
          </CardFooter>
        </Card>
      </div>
    </ScrollArea>
  );
};

const FinanceSummaryCards: React.FC<{
  orders: Order[];
  isLoading: boolean;
}> = ({ orders, isLoading }) => {
  const { paidStats, pendingStats } = useMemo(() => {
    const paid = { count: 0, amount: 0 };
    const pending = { count: 0, amount: 0 };

    orders.forEach((order) => {
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
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
        order.shipping_address.recipient
          .toLowerCase()
          .includes(lowerCaseQuery);

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
    setSelectedOrderId(orderId);
    setIsDialogOpen(true);
  };

  const onDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setSelectedOrderId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoaderCircle className="h-12 w-12 animate-spin" />
      </div>
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
    <>
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
              Lihat semua transaksi yang masuk, baik yang sudah lunas maupun
              yang masih menunggu pembayaran.
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
                          <TableCell className="font-mono">
                            #{order.id}
                          </TableCell>
                          <TableCell className="font-medium">
                            {order.shipping_address.recipient}
                          </TableCell>
                          <TableCell>
                            {formatDate(order.order_date)}
                          </TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded-full capitalize ${
                                order.status === "PENDING_PAYMENT"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                                  : "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                              }`}
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
                              <IconFileInvoice className="h-4 w-4 mr-2" />{" "}
                              Lihat
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

      <Dialog open={isDialogOpen} onOpenChange={onDialogChange}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Detail Pesanan #{selectedOrderId}</DialogTitle>
            <DialogDescription>
              Rincian lengkap untuk pesanan yang dipilih.
            </DialogDescription>
          </DialogHeader>
          {selectedOrderId && (
            <OrderDetailDialog
              orderId={selectedOrderId}
              onUpdateSuccess={() => setIsDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FinanceManagementPage;
