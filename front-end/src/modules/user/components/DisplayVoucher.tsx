// src/app/user/account/components/DisplayVoucher.tsx

import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ticket, LoaderCircle, ServerCrash, Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Voucher } from "@/types/vocher.types";
import { getAllVouchers } from "@/services/vocher.service";

// Helper untuk format tanggal
const formatDate = (dateString: string | Date) => {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

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

// Komponen baru untuk menampilkan satu item voucher dengan desain yang lebih menarik
const VoucherCard: React.FC<{ voucher: Voucher }> = ({ voucher }) => {
  const isExpired = new Date(voucher.valid_until) < new Date();
  const cardClasses = `w-full bg-background dark:bg-neutral-800 rounded-lg border-2 dark:border-neutral-700 flex transition-opacity ${
    isExpired ? "opacity-60 border-dashed" : "border-solid"
  }`;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`Kode "${code}" berhasil disalin!`);
  };

  return (
    <div className={cardClasses}>
      {/* Bagian Kiri (Ikon) */}
      <div
        className={`flex flex-col items-center justify-center p-4 rounded-l-md ${isExpired ? "bg-muted dark:bg-neutral-700" : "bg-amber-500"}`}
      >
        <Ticket
          className="w-8 h-8 text-white"
          style={{ transform: "rotate(-45deg)" }}
        />
      </div>

      {/* Garis Pemisah */}
      <div className="border-l-2 border-dashed border-neutral-300 dark:border-neutral-600"></div>

      {/* Bagian Kanan (Detail) */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <p
            className={`font-bold text-lg ${isExpired ? "text-muted-foreground line-through" : "text-foreground"}`}
          >
            {voucher.description ||
              `Diskon ${formatCurrency(voucher.discount_value)}`}
          </p>
          <p className="text-xs text-muted-foreground">
            *Min. belanja {formatCurrency(voucher.min_purchase)}
          </p>
        </div>
        <div className="flex items-center justify-between mt-3 text-xs">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-muted-foreground">KODE:</p>
            <span className="font-mono font-bold tracking-wider text-amber-600 dark:text-amber-400">
              {voucher.code}
            </span>
            {!isExpired && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => handleCopyCode(voucher.code)}
              >
                <Copy className="h-3 w-3" />
              </Button>
            )}
          </div>
          <p className="text-muted-foreground">
            Berlaku hingga:{" "}
            <span className="font-semibold">
              {formatDate(voucher.valid_until)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Komponen baru untuk tampilan saat voucher kosong
const EmptyVoucherState: React.FC<{ title: string; message: string }> = ({
  title,
  message,
}) => (
  <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground py-10">
    <Ticket className="w-16 h-16 mb-4 opacity-50" />
    <p className="font-bold text-lg">{title}</p>
    <p className="text-sm">{message}</p>
  </div>
);

const DisplayVoucher = () => {
  // Mengambil data voucher menggunakan TanStack Query
  const {
    data: vouchers = [], // Default ke array kosong
    isLoading,
    isError,
    error,
  } = useQuery<Voucher[]>({
    queryKey: ["myVouchers"],
    queryFn: getAllVouchers,
  });

  // Memisahkan voucher menjadi tersedia dan riwayat
  const { availableVouchers, historyVouchers } = useMemo(() => {
    const available: Voucher[] = [];
    const history: Voucher[] = [];
    vouchers.forEach((v) => {
      if (new Date(v.valid_until) < new Date()) {
        history.push(v);
      } else {
        available.push(v);
      }
    });
    return { availableVouchers: available, historyVouchers: history };
  }, [vouchers]);

  return (
    <>
      <CardHeader>
        <CardTitle>Voucher Saya</CardTitle>
        <CardDescription>
          Gunakan voucher untuk mendapatkan diskon dan penawaran spesial!
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[calc(100vh-20rem)] md:h-[calc(100vh-18rem)] flex flex-col">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : isError ? (
          <div className="flex flex-col justify-center items-center h-full text-center">
            <ServerCrash className="h-10 w-10 text-destructive mb-2" />
            <p className="font-semibold text-destructive">
              Gagal Memuat Voucher
            </p>
            <p className="text-sm text-muted-foreground">
              {(error as Error).message}
            </p>
          </div>
        ) : (
          <Tabs
            defaultValue="available"
            className="w-full flex-grow flex flex-col"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="available">
                Tersedia ({availableVouchers.length})
              </TabsTrigger>
              <TabsTrigger value="history">
                Riwayat ({historyVouchers.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="available"
              className="flex-grow overflow-y-auto mt-4 pr-1 space-y-3"
            >
              {availableVouchers.length > 0 ? (
                availableVouchers.map((voucher) => (
                  <VoucherCard key={voucher.id} voucher={voucher} />
                ))
              ) : (
                <EmptyVoucherState
                  title="Tidak Ada Voucher Tersedia"
                  message="Nantikan promo dan penawaran menarik lainnya!"
                />
              )}
            </TabsContent>
            <TabsContent
              value="history"
              className="flex-grow overflow-y-auto mt-4 pr-1 space-y-3"
            >
              {historyVouchers.length > 0 ? (
                historyVouchers.map((voucher) => (
                  <VoucherCard key={voucher.id} voucher={voucher} />
                ))
              ) : (
                <EmptyVoucherState
                  title="Tidak Ada Riwayat Voucher"
                  message="Voucher yang sudah kadaluwarsa akan ditampilkan di sini."
                />
              )}
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </>
  );
};

export default DisplayVoucher;
