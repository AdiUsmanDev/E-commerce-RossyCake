// src/components/shop/ProductGrid.tsx (atau path yang sesuai)

import React from "react";
import { Product } from "@/types/product.types";
import { IconSearchOff } from "@tabler/icons-react";
import ProductCard from "@/modules/home/components/ProductCard";

// --- Tipe Props yang Disederhanakan ---
interface ProductGridProps {
  products: Product[];
}

/**
 * Komponen untuk menampilkan pesan saat tidak ada produk yang ditemukan.
 */
const NoProductsFound: React.FC = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-16 text-center text-muted-foreground bg-slate-50 dark:bg-neutral-800/50 rounded-lg">
    <IconSearchOff size={48} className="mb-4 text-slate-400" />
    <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
      Produk Tidak Ditemukan
    </h3>
    <p className="mt-1 max-w-sm">
      Coba ubah kata kunci pencarian atau filter kategori Anda untuk melihat
      lebih banyak hasil.
    </p>
  </div>
);

/**
 * ProductGrid kini menjadi komponen presentasional murni.
 * Tugasnya hanya menata produk dalam sebuah grid.
 */
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  // Peningkatan: Menangani kasus jika tidak ada produk
  if (!products || products.length === 0) {
    return (
      <div className="grid grid-cols-1">
        <NoProductsFound />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        // Tidak perlu lagi mengoper `onAddToCart`
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
