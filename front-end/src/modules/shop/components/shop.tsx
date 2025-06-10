"use client"; // Diperlukan untuk useState dan useEffect di Next.js App Router

import { useQuery } from "@tanstack/react-query";
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

// Asumsi file-file ini ada di lokasi yang benar
import { getProducts } from "@/services/product.service";
import { CartItem, Product } from "@/types/product.types";
import HeaderMarket from "./headerMarket"; // Komponen header dari kode Anda
import { useEffect, useMemo, useState } from "react";
import { ProductSkeleton } from "./ProductSkeleton";
import { ApiErrorDisplay } from "./ApiErrorDisplay";
import HeroBanner from "./HeroBanner";
import ProductGrid from "./ProductGrid";

const ShopPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); // State untuk pencarian

  // Ambil data produk dari API
  const {
    data: allProducts = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 1,
  });

  // Ambil data keranjang dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("shopCart");
      if (savedCart) setCartItems(JSON.parse(savedCart));
    } catch (e) {
      console.error("Gagal memuat keranjang:", e);
      localStorage.removeItem("shopCart");
    }
  }, []);

  // Simpan keranjang ke localStorage setiap kali ada perubahan
  useEffect(() => {
    try {
      localStorage.setItem("shopCart", JSON.stringify(cartItems));
    } catch (e) {
      console.error("Gagal menyimpan keranjang:", e);
    }
  }, [cartItems]);

  const handleAddToCart = (productToAdd: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === productToAdd.id
      );
      if (existingItem) {
        if (existingItem.quantity >= productToAdd.stock) {
          console.warn(`Stok untuk ${productToAdd.name} tidak mencukupi.`);
          return prevItems;
        }
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
    console.log(`${productToAdd.name} ditambahkan ke keranjang.`);
  };

  const handleUpdateCartItemQuantity = (
    productId: number,
    newQuantity: number
  ) => {
    setCartItems((prevItems) => {
      const product = allProducts.find((p) => p.id === productId);
      if (!product) return prevItems;

      if (newQuantity <= 0) {
        return prevItems.filter((item) => item.id !== productId);
      }
      if (newQuantity > product.stock) {
        console.warn(`Stok untuk ${product.name} hanya ${product.stock}.`);
        return prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: product.stock } : item
        );
      }
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const handleRemoveCartItem = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // --- Logika Filter dan Sortir ---
  const categories = useMemo(() => {
    const allCats = allProducts
      .map((p) => p.category)
      .filter(Boolean) as string[];
    return [...new Set(allCats)];
  }, [allProducts]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  const filteredAndSortedProducts = useMemo(() => {
    let products = allProducts.filter((p) => p.stock > 0);

    // Filter berdasarkan pencarian
    if (searchQuery) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter berdasarkan kategori
    if (selectedCategories.length > 0) {
      products = products.filter(
        (p) => p.category && selectedCategories.includes(p.category)
      );
    }

    // Sortir
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
  }, [allProducts, selectedCategories, sortOrder, searchQuery]); // Tambahkan searchQuery ke dependencies

  return (
    <GuestLayouts>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <HeaderMarket
          cartItems={cartItems}
          onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
          onRemoveCartItem={handleRemoveCartItem}
          onClearCart={handleClearCart}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <main className="pt-8">
          <HeroBanner />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* --- Filter Sidebar (Desktop) --- */}
            <aside className="hidden lg:block lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Filter Produk</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Kategori</h4>
                      <div className="space-y-2">
                        {categories.map((cat) => (
                          <div
                            key={cat}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`cat-${cat}`}
                              onCheckedChange={(checked) =>
                                handleCategoryChange(cat, !!checked)
                              }
                              checked={selectedCategories.includes(cat)}
                            />
                            <Label
                              htmlFor={`cat-${cat}`}
                              className="font-normal capitalize"
                            >
                              {cat}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
                      <Button variant="outline" className="lg:hidden w-full">
                        <SlidersHorizontal className="h-4 w-4 mr-2" /> Filter
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Filter Produk</SheetTitle>
                      </SheetHeader>
                      <div className="py-6 space-y-4">
                        <h4 className="font-medium mb-2">Kategori</h4>
                        <div className="space-y-2">
                          {categories.map((cat) => (
                            <div
                              key={`mob-cat-${cat}`}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`mob-cat-${cat}`}
                                onCheckedChange={(checked) =>
                                  handleCategoryChange(cat, !!checked)
                                }
                                checked={selectedCategories.includes(cat)}
                              />
                              <Label
                                htmlFor={`mob-cat-${cat}`}
                                className="font-normal capitalize"
                              >
                                {cat}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Select onValueChange={setSortOrder} defaultValue="default">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Urutkan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
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
                <ProductSkeleton />
              ) : isError ? (
                <ApiErrorDisplay
                  title="Gagal Memuat Produk"
                  error={error as Error}
                  onRetry={refetch}
                />
              ) : (
                <ProductGrid
                  products={filteredAndSortedProducts}
                  onAddToCart={handleAddToCart}
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </GuestLayouts>
  );
};

export default ShopPage;
