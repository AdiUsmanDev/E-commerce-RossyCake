"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast"; // Populer untuk notifikasi
import { IconTicket, IconCut, IconClipboardCheck } from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ApiErrorDisplay } from "@/modules/shop/components/ApiErrorDisplay";
import { getAllVouchers } from "@/services/vocher.service";
import { Voucher } from "@/types/vocher.types";

// ===================================================================
// Komponen Kartu Promo Baru (dengan desain Kupon)
// ===================================================================
const PromotionCard = ({ voucher }: { voucher: Voucher }) => {
  const formatDiscount = () => {
    if (voucher.discount_type === "PERCENTAGE") {
      return `${voucher.discount_value}%`;
    }
    // Format menjadi "10k" atau "50k" jika ribuan
    const valueInThousands = voucher.discount_value / 1000;
    if (voucher.discount_value >= 1000) {
      return `Rp${valueInThousands}k`;
    }
    return `Rp${voucher.discount_value}`;
  };

  const handleClaim = () => {
    navigator.clipboard.writeText(voucher.code);
    toast.success(`Kode "${voucher.code}" berhasil disalin!`);
  };

  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="p-1 h-full">
        {/* Desain Kartu Tiket */}
        <Card className="relative flex h-full overflow-hidden bg-white dark:bg-neutral-800 border-none shadow-lg transition-transform hover:scale-105">
          {/* Efek sobekan kiri */}
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-rose-50 dark:bg-neutral-900"></div>
          {/* Efek sobekan kanan */}
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-rose-50 dark:bg-neutral-900"></div>

          {/* Bagian Kiri: Ikon & Diskon */}
          <div className="flex flex-col items-center justify-center gap-2 p-4 bg-rose-100 dark:bg-neutral-700/50 w-1/3">
            <IconTicket size={40} className="text-rose-500" />
            <h3 className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">
              {formatDiscount()}
            </h3>
            <span className="font-semibold text-rose-700 dark:text-rose-300">
              Diskon
            </span>
          </div>

          {/* Garis Pemisah Sobekan */}
          <div className="w-px border-l-2 border-dashed border-gray-300 dark:border-neutral-600 my-4"></div>

          {/* Bagian Kanan: Detail & Tombol */}
          <CardContent className="flex flex-col items-start gap-2 p-4 flex-grow">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              Kode:
              <span className="ml-2 rounded-md bg-amber-100 px-2 py-1 font-mono text-base text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
                {voucher.code}
              </span>
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 flex-grow">
              {voucher.description}
            </p>
            <p className="text-xs text-gray-500">
              Berlaku hingga:{" "}
              {new Date(voucher.valid_until).toLocaleDateString("id-ID")}
            </p>
            <Button
              onClick={handleClaim}
              className="mt-2 w-full bg-rose-500 text-white hover:bg-rose-600"
            >
              <IconClipboardCheck size={16} className="mr-2" />
              Klaim Voucher
            </Button>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

// ===================================================================
// Komponen Skeleton Baru
// ===================================================================
const PromotionCardSkeleton = () => (
  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
    <div className="p-1 h-full">
      <Card className="relative flex h-full overflow-hidden animate-pulse">
        <div className="flex flex-col items-center justify-center p-4 bg-neutral-200 dark:bg-neutral-700/50 w-1/3">
          <div className="h-10 w-10 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
          <div className="h-8 w-16 mt-2 rounded bg-neutral-300 dark:bg-neutral-600"></div>
        </div>
        <div className="w-px border-l-2 border-dashed border-gray-300 dark:border-neutral-600 my-4"></div>
        <CardContent className="flex flex-col items-start gap-3 p-4 flex-grow">
          <div className="h-8 w-40 rounded bg-neutral-300 dark:bg-neutral-600"></div>
          <div className="h-10 w-full rounded bg-neutral-300 dark:bg-neutral-600"></div>
          <div className="h-10 w-full mt-auto rounded-lg bg-neutral-300 dark:bg-neutral-600"></div>
        </CardContent>
      </Card>
    </div>
  </CarouselItem>
);

// ===================================================================
// Komponen Section Utama
// ===================================================================
export const PromotionsSection = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["vouchers"],
    queryFn: getAllVouchers,
  });

  // Logika yang Lebih Cerdas: Hanya tampilkan voucher yang masih valid
  const activeVouchers = useMemo(() => {
    if (!data) return [];
    return data.filter(
      (voucher) => new Date(voucher.valid_until) >= new Date()
    );
  }, [data]);

  return (
    <div className="w-full  dark:bg-neutral-900 py-16 md:py-24">
      <div className="container mx-auto flex flex-col gap-8 justify-center items-center">
        <div className="text-center space-y-2">
          <p className="font-semibold text-rose-600">Penawaran Spesial</p>
          <h1 className="font-bold text-3xl md:text-4xl text-neutral-800 dark:text-neutral-100">
            Diskon & Promo Untukmu
          </h1>
        </div>

        {isError && (
          <ApiErrorDisplay
            title="Gagal Memuat Promo"
            error={error}
            onRetry={refetch}
          />
        )}

        {!isError && (
          <Carousel
            opts={{
              align: "start",
              loop: activeVouchers.length > 2,
            }}
            className="w-full max-w-6xl px-4"
          >
            <CarouselContent className="-ml-2 py-4">
              {isLoading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <PromotionCardSkeleton key={index} />
                  ))
                : activeVouchers.map((item) => (
                    <PromotionCard voucher={item} key={item.id} />
                  ))}
            </CarouselContent>
            <CarouselPrevious className="ml-2 md:ml-0 text-rose-500" />
            <CarouselNext className="mr-2 md:mr-0 text-rose-500" />
          </Carousel>
        )}
      </div>
    </div>
  );
};
