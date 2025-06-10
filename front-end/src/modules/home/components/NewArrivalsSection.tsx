// src/features/home/NewArrivalsSection.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMemo } from "react";
import { Product } from "@/types/product.types";
import { getProducts } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";
import ProductCardSkeleton from "./ProductSkelton";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

export const NewArrivalsSection = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 1,
  });

  // Gunakan useMemo untuk mengurutkan produk baru, ini lebih efisien.
  const newArrivals = useMemo(() => {
    if (!products) return [];
    // Urutkan berdasarkan tanggal pembuatan, dari yang terbaru
    return [...products]
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
      .slice(0, 8); // Ambil 8 produk terbaru saja
  }, [products]);

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-center px-4">
        <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-100">
          Produk Baru Kami
        </h2>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Cicipi kreasi terbaru dari dapur kami, dibuat dengan bahan-bahan segar
          dan sentuhan inovasi.
        </p>
      </div>

      <div className="w-full max-w-7xl px-4 md:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 py-4">
            {isLoading ? (
              // Tampilkan skeleton saat loading
              Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem
                  key={`skeleton-${index}`}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <ProductCardSkeleton />
                </CarouselItem>
              ))
            ) : isError || newArrivals.length === 0 ? (
              // Tampilan jika error atau tidak ada data
              <CarouselItem className="w-full">
                <div className="text-center py-12 text-muted-foreground">
                  <p>Tidak dapat memuat produk baru saat ini.</p>
                </div>
              </CarouselItem>
            ) : (
              // Tampilkan produk jika berhasil dimuat
              newArrivals.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  {/* Asumsi ProductCard menerima onAddToCart, jika tidak, bisa dihapus */}
                  <ProductCard product={product} onAddToCart={() => {}} />
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      <div className="mt-6">
        <Link to="/shop">
          <Button variant="outline" size="lg">
            Lihat Semua Produk
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewArrivalsSection;
