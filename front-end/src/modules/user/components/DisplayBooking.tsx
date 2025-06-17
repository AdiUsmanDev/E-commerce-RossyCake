"use client";

import React, { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Command, CommandInput } from "@/components/ui/command";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CreditCard,
  Eye,
  LoaderCircle,
  ServerCrash,
  Trash2,
  CheckCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import toast from "react-hot-toast";

// Impor service dan tipe data yang relevan
import {
  getMyOrders,
  updateOrder,
  deleteOrder,
  getOrderById,
} from "@/services/order.service";
import { Order as OrderType, UpdateOrderDTO } from "@/types/order.types";
import { useNavigate } from "@tanstack/react-router";

// Helper Functions
const formatCurrency = (amount: number | string) => {
  const numericAmount =
    typeof amount === "string" ? parseFloat(amount) : amount;
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

// Data Opsi Pengiriman (didefinisikan di sini agar konsisten dengan halaman checkout)
const SHIPPING_OPTIONS = [
  { id: "JNE REG", name: "JNE Regular (2-3 Hari)", cost: 18000 },
  { id: "SiCepat BEST", name: "SiCepat BEST (1-2 Hari)", cost: 25000 },
];

const DisplayBooking = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const [processingOrder, setProcessingOrder] = useState<{
    id: number | null;
    type: "update" | "cancel" | "pay_init" | null;
  }>({ id: null, type: null });

  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useQuery<OrderType[]>({
    queryKey: ["myOrders"],
    queryFn: getMyOrders,
  });

  const { mutate: updateOrderStatus, isPending: isUpdating } = useMutation({
    mutationFn: ({
      orderId,
      payload,
    }: {
      orderId: number;
      payload: UpdateOrderDTO;
    }) => updateOrder(orderId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myOrders"] });
    },
    onError: (err: Error) => {
      console.error(err);
    },
  });

  const { mutate: cancelOrder, isPending: isCancelling } = useMutation({
    mutationFn: (orderId: number) => deleteOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myOrders"] });
    },
  });

  // PERBAIKAN: Logika mutasi diperbarui untuk menangani data dengan benar
  const getOrderForPaymentMutation = useMutation({
    mutationFn: (orderId: number) => getOrderById(orderId),
    onSuccess: (data) => {
      // Buat variabel khusus untuk setiap bagian data yang akan disimpan
      const shippingAddressForCheckout = data.shipping_address;
      const cartItemsForCheckout = data.order_items.map((item) => ({
        id: item.product_id,
        name: item.product?.name || "Produk Dihapus",
        price: parseFloat(item.price),
        quantity: item.quantity,
        image: item.product?.images?.[0]?.url || "", // Fallback untuk gambar
      }));
      const shippingOptionForCheckout = SHIPPING_OPTIONS.find(
        (opt) => opt.id === data.shipping_method
      );

      // Simpan ke localStorage dengan kunci yang sama dengan yang dibaca oleh halaman checkout
      localStorage.setItem(
        "shippingAddress",
        JSON.stringify(shippingAddressForCheckout)
      );
      localStorage.setItem("shopCart", JSON.stringify(cartItemsForCheckout));
      if (shippingOptionForCheckout) {
        localStorage.setItem(
          "selectedShipping",
          JSON.stringify(shippingOptionForCheckout)
        );
      } else {
        localStorage.removeItem("selectedShipping");
      }

      // Arahkan ke halaman checkout utama, yang akan memuat data ini
      navigate({ to: `/shop/checkout/${data.id}` });
    },
    onSettled: () => {
      setProcessingOrder({ id: null, type: null });
    },
  });

  const filteredInvoices = useMemo(() => {
    if (!orders) return [];
    return orders.filter((order) => {
      const lowerCaseStatus = order.status.toLowerCase();
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "notPaid" && lowerCaseStatus === "pending_payment") ||
        (activeTab === "packing" && lowerCaseStatus === "paid") ||
        (activeTab === "onDelivery" && lowerCaseStatus === "shipped") ||
        (activeTab === "finish" && lowerCaseStatus === "completed") ||
        (activeTab === "cancel" && lowerCaseStatus === "cancelled");
      const lowerCaseQuery = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        order.id.toString().includes(lowerCaseQuery) ||
        lowerCaseStatus.includes(lowerCaseQuery) ||
        order.order_items?.some((item) =>
          item.product?.name.toLowerCase().includes(lowerCaseQuery)
        );
      return matchesTab && matchesSearch;
    });
  }, [orders, activeTab, searchQuery]);

  const handlePay = (orderId: number) => {
    setProcessingOrder({ id: orderId, type: "pay_init" });
    toast.promise(getOrderForPaymentMutation.mutateAsync(orderId), {
      loading: "Mempersiapkan pembayaran...",
      success: <b>Mengarahkan Anda ke halaman pembayaran...</b>,
      error: (err) => `Gagal: ${(err as Error).message}`,
    });
  };

  const handleCancel = (orderId: number) => {
    if (window.confirm("Apakah Anda yakin ingin membatalkan pesanan ini?")) {
      setProcessingOrder({ id: orderId, type: "cancel" });
      cancelOrder(orderId, {
        onSuccess: () => {
          toast.success("Pesanan berhasil dibatalkan.");
        },
        onError: (err) => {
          toast.error(`Gagal membatalkan: ${(err as Error).message}`);
        },
        onSettled: () => setProcessingOrder({ id: null, type: null }),
      });
    }
  };

  const handleOrderReceived = (orderId: number) => {
    setProcessingOrder({ id: orderId, type: "update" });
    updateOrderStatus(
      { orderId, payload: { status: "COMPLETED" } },
      {
        onSuccess: () => {
          toast.success("Terima kasih! Pesanan Anda telah selesai.");
        },
        onError: (err) => {
          toast.error(`Gagal: ${(err as Error).message}`);
        },
        onSettled: () => setProcessingOrder({ id: null, type: null }),
      }
    );
  };

  if (isLoading) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Memuat pesanan Anda...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center">
        <ServerCrash className="h-12 w-12 text-destructive" />
        <p className="mt-4 font-semibold text-destructive">Gagal memuat data</p>
        <p className="text-muted-foreground text-sm">
          {(error as Error).message}
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Pesanan Saya</CardTitle>
        <CardDescription>
          Lacak, kelola, dan lihat riwayat pesanan Anda di sini.
        </CardDescription>
        <Command className="rounded-lg border dark:border-neutral-700 shadow-xs mt-2 relative">
          <CommandInput
            placeholder="Cari pesanan (No. Invoice, Status, Nama Produk)..."
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
        </Command>
      </CardHeader>
      <CardContent className="p-0 md:p-2 lg:p-4 flex-grow flex flex-col overflow-hidden">
        <Tabs
          defaultValue="all"
          className="w-full flex flex-col flex-grow"
          onValueChange={setActiveTab}
        >
          <div className="categoriesBooking overflow-x-auto whitespace-nowrap pb-2 mb-4 border-b dark:border-neutral-700">
            <TabsList className="w-max justify-start gap-1 bg-transparent px-1">
              {/* Tabs Triggers */}
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm px-3 py-1.5 text-sm"
              >
                Semua
              </TabsTrigger>
              <TabsTrigger
                value="notPaid"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm px-3 py-1.5 text-sm"
              >
                Belum Bayar
              </TabsTrigger>
              <TabsTrigger
                value="packing"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm px-3 py-1.5 text-sm"
              >
                Dikemas
              </TabsTrigger>
              <TabsTrigger
                value="onDelivery"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm px-3 py-1.5 text-sm"
              >
                Dikirim
              </TabsTrigger>
              <TabsTrigger
                value="finish"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm px-3 py-1.5 text-sm"
              >
                Selesai
              </TabsTrigger>
              <TabsTrigger
                value="cancel"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm px-3 py-1.5 text-sm"
              >
                Dibatalkan
              </TabsTrigger>
            </TabsList>
          </div>
          <ScrollArea className="flex-grow pr-1">
            <TabsContent value={activeTab} className="mt-0">
              {filteredInvoices.length > 0 ? (
                filteredInvoices.map((order) => {
                  const isBeingUpdated =
                    isUpdating &&
                    processingOrder.id === order.id &&
                    processingOrder.type === "update";
                  const isBeingCancelled =
                    isCancelling &&
                    processingOrder.id === order.id &&
                    processingOrder.type === "cancel";
                  const isInitiatingPayment =
                    getOrderForPaymentMutation.isPending &&
                    processingOrder.id === order.id &&
                    processingOrder.type === "pay_init";

                  return (
                    <Accordion
                      key={order.id}
                      type="single"
                      collapsible
                      className="mb-2 border dark:border-neutral-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionItem
                        value={`item-${order.id}`}
                        className="border-b-0"
                      >
                        <AccordionTrigger className="p-3 hover:bg-muted/50 dark:hover:bg-muted/30 rounded-t-lg text-sm">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-4 text-left">
                            <div
                              className="font-semibold text-neutral-800 dark:text-neutral-100 md:w-[120px] truncate"
                              title={`#${order.id}`}
                            >
                              #{order.id}
                            </div>
                            <div className="md:w-[150px]">
                              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                Tanggal Pesan
                              </p>
                              <p className="text-neutral-700 dark:text-neutral-300">
                                {formatDate(order.created_at)}
                              </p>
                            </div>
                            <div className="md:w-[100px]">
                              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                Status
                              </p>
                              <p className={`font-medium capitalize`}>
                                {formatStatus(order.status)}
                              </p>
                            </div>
                            <div className="md:w-[80px] text-left md:text-right">
                              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                Items
                              </p>
                              <p className="text-neutral-700 dark:text-neutral-300">
                                {order.order_items?.length}
                              </p>
                            </div>
                            <div className="md:w-[120px] text-left md:text-right">
                              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                Total
                              </p>
                              <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                                {formatCurrency(order.total_price)}
                              </p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-3 bg-muted/30 dark:bg-muted/10 rounded-b-lg">
                          <p className="text-sm font-semibold mb-2">
                            Detail Item:
                          </p>
                          {order.order_items && order.order_items.length > 0 ? (
                            <Table className="bg-background dark:bg-neutral-800/50 text-xs">
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Produk</TableHead>
                                  <TableHead className="text-center">
                                    Jumlah
                                  </TableHead>
                                  <TableHead className="text-right">
                                    Harga Satuan
                                  </TableHead>
                                  <TableHead className="text-right">
                                    Subtotal
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {order.order_items.map((item) => (
                                  <TableRow key={item.id}>
                                    <TableCell className="font-medium">
                                      {item.product?.name ||
                                        "Produk tidak tersedia"}
                                    </TableCell>
                                    <TableCell className="text-center">
                                      {item.quantity}
                                    </TableCell>
                                    <TableCell className="text-right">
                                      {formatCurrency(item.price)}
                                    </TableCell>
                                    <TableCell className="text-right">
                                      {formatCurrency(
                                        parseFloat(item.price) * item.quantity
                                      )}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          ) : (
                            <p className="text-xs text-neutral-500">
                              Tidak ada detail item untuk pesanan ini.
                            </p>
                          )}
                          <div className="flex flex-wrap items-center gap-2 justify-end mt-4 pt-3 border-t dark:border-neutral-700">
                            {order.status.toLowerCase() ===
                              "pending_payment" && (
                              <>
                                <Button
                                  size="sm"
                                  className="bg-blue-500 hover:bg-blue-600 text-white text-xs"
                                  onClick={() => handlePay(order.id)}
                                  disabled={
                                    isUpdating ||
                                    isCancelling ||
                                    isInitiatingPayment
                                  }
                                >
                                  {isInitiatingPayment ? (
                                    <LoaderCircle className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                                  ) : (
                                    <CreditCard className="mr-1.5 h-3.5 w-3.5" />
                                  )}
                                  Bayar
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  className="text-xs"
                                  onClick={() => handleCancel(order.id)}
                                  disabled={
                                    isUpdating ||
                                    isCancelling ||
                                    isInitiatingPayment
                                  }
                                >
                                  {isBeingCancelled ? (
                                    <LoaderCircle className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                                  ) : (
                                    <Trash2 className="mr-1.5 h-3.5 w-3.5" />
                                  )}
                                  Batal
                                </Button>
                              </>
                            )}
                            {order.status.toLowerCase() === "shipped" && (
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white text-xs"
                                onClick={() => handleOrderReceived(order.id)}
                                disabled={isUpdating || isCancelling}
                              >
                                {isBeingUpdated ? (
                                  <LoaderCircle className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                                ) : (
                                  <CheckCheck className="mr-1.5 h-3.5 w-3.5" />
                                )}
                                Pesanan Diterima
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-xs"
                              onClick={() =>
                                navigate({
                                  to: `/shop/checkout/order-success/${order.id}`,
                                })
                              }
                            >
                              <Eye className="mr-1.5 h-3.5 w-3.5" /> Detail
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                })
              ) : (
                <p className="p-10 text-center text-neutral-500 dark:text-neutral-400">
                  {searchQuery
                    ? "Tidak ada pesanan yang cocok dengan pencarian Anda."
                    : `Tidak ada pesanan dalam kategori ini.`}
                </p>
              )}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </CardContent>
    </div>
  );
};

export default DisplayBooking;
