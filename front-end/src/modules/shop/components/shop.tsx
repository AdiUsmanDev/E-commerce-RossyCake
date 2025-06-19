"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

// --- UI & Ikon ---
import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";

// --- Komponen Halaman ---
import HeroBanner from "./HeroBanner";
import ProductGrid from "./ProductGrid";
import { ProductSkeleton } from "./ProductSkeleton";
import { ApiErrorDisplay } from "./ApiErrorDisplay";

// --- Servis & Tipe Data ---
import { getProducts } from "@/services/product.service";
import HeaderMarket from "./headerMarket";
import { useCart } from "@/hooks/useCart";

const FilterPanel: React.FC<{
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
}> = ({ categories, selectedCategories, onCategoryChange }) => (
  <div className="space-y-4">
    <div>
      <h4 className="font-semibold text-lg mb-4">Kategori</h4>
      <div className="space-y-3">
        {categories.length > 0 ? (
          categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox
                id={`cat-${cat}`}
                onCheckedChange={(checked) => onCategoryChange(cat, !!checked)}
                checked={selectedCategories.includes(cat)}
              />
              <Label
                htmlFor={`cat-${cat}`}
                className="font-normal capitalize cursor-pointer"
              >
                {cat}
              </Label>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">Tidak ada kategori.</p>
        )}
      </div>
    </div>
    {/* Di sini Anda bisa menambahkan filter lain di masa depan, misal: filter harga */}
  </div>
);

// ===================================================================
// 2. KOMPONEN UTAMA HALAMAN TOKO
// ===================================================================

const ShopPage: React.FC = () => {
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: productsData = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts, // Mengambil semua produk tanpa limit
  });

  // --- Logika Filter dan Sortir (Tidak Berubah) ---
  const categories = useMemo(() => {
    const allCats = productsData
      .map((p) => p.category)
      .filter(Boolean) as string[];
    return [...new Set(allCats)];
  }, [productsData]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  const filteredAndSortedProducts = useMemo(() => {
    let products = productsData.filter((p) => p.stock > 0);

    if (searchQuery) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategories.length > 0) {
      products = products.filter(
        (p) => p.category && selectedCategories.includes(p.category)
      );
    }
    switch (sortOrder) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    return products;
  }, [productsData, selectedCategories, sortOrder, searchQuery]);
  
  return (
    <GuestLayouts>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* HeaderMarket kini mandiri & tidak lagi menerima props keranjang */}
        <HeaderMarket
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <main>
          <HeroBanner />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
            {/* --- Filter Sidebar (Desktop) --- */}
            <aside className="hidden lg:block lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <FilterPanel
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onCategoryChange={handleCategoryChange}
                  />
                </CardContent>
              </Card>
            </aside>

            {/* --- Product List --- */}
            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  Semua Produk
                </h2>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* --- Filter Trigger (Mobile) --- */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="outline"
                        className="lg:hidden w-full sm:w-auto"
                      >
                        <SlidersHorizontal className="h-4 w-4 mr-2" /> Filter
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Filter Produk</SheetTitle>
                      </SheetHeader>
                      <div className="py-6">
                        <FilterPanel
                          categories={categories}
                          selectedCategories={selectedCategories}
                          onCategoryChange={handleCategoryChange}
                        />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Select onValueChange={setSortOrder} defaultValue="default">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Urutkan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Urutan Standar</SelectItem>
                      <SelectItem value="price-asc">Harga: Terendah</SelectItem>
                      <SelectItem value="price-desc">
                        Harga: Tertinggi
                      </SelectItem>
                      <SelectItem value="name-asc">Nama: A-Z</SelectItem>
                      <SelectItem value="name-desc">Nama: Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {isLoading ? (
                <ProductSkeleton count={8} />
              ) : isError ? (
                <ApiErrorDisplay
                  title="Gagal Memuat Produk"
                  error={error as Error}
                  onRetry={refetch}
                />
              ) : (
                // ProductGrid kini tidak lagi memerlukan prop onAddToCart
                <ProductGrid products={filteredAndSortedProducts} />
              )}
            </div>
          </div>
        </main>
      </div>
    </GuestLayouts>
  );
};

export default ShopPage;
