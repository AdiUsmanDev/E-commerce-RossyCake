// src/components/shop/ProductSkeleton.tsx

import React from "react";

/**
 * Komponen skeleton untuk menampilkan placeholder saat produk sedang dimuat.
 */
export const ProductSkeleton: React.FC = () => {
  return (
    <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 animate-pulse">
      {/* Placeholder untuk Gambar */}
      <div className="w-full h-48 bg-neutral-200 dark:bg-neutral-700 rounded-md mb-4"></div>

      {/* Placeholder untuk Judul */}
      <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 mb-2"></div>

      {/* Placeholder untuk Harga */}
      <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2 mb-4"></div>

      {/* Placeholder untuk Tombol */}
      <div className="h-10 bg-neutral-200 dark:bg-neutral-700 rounded-md w-full"></div>
    </div>
  );
};
