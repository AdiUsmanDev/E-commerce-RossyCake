// src/components/shop/HeaderMarket.tsx (File yang sudah diperbaiki)

"use client";

import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

// UI Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Command, CommandInput } from "@/components/ui/command";
import { ShoppingCart } from "./ShoppingCart";

// Definisikan props untuk HeaderMarket
interface HeaderMarketProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeaderMarket: React.FC<HeaderMarketProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // Fokuskan ke input search
        const searchInput = document.querySelector<HTMLInputElement>(
          'input[aria-label="Cari produk"]'
        );
        searchInput?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
      {/* Bagian Kiri: Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Beranda</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold text-rose-600 dark:text-rose-400">
              Toko
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Bagian Kanan: Search & Keranjang */}
      <div className="flex items-center gap-3">
        {/* Search Bar dengan tema */}
        <div className="relative w-full md:w-64 lg:w-72">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
          <Command className="rounded-full border shadow-sm h-auto bg-stone-50 dark:bg-neutral-800">
            <CommandInput
              value={searchQuery}
              onValueChange={onSearchChange}
              placeholder="Cari kue favoritmu..."
              aria-label="Cari produk"
              className="pl-10 text-sm h-11"
            />
          </Command>
        </div>

        {/* Komponen Keranjang Mandiri */}
        <ShoppingCart />
      </div>
    </div>
  );
};

export default HeaderMarket;
