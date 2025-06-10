// src/components/shared/ProductCard.tsx

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Product } from "@/types/product.types";
import { Link } from "@tanstack/react-router";

const ProductCard: React.FC<{
  product: Product;
  onAddToCart: (product: Product) => void;
}> = ({ product, onAddToCart }) => {
  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Mencegah navigasi dari komponen Link saat tombol diklik
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div className="h-full ">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 h-full flex flex-col ">
        <Link to={`/shop`} className="block flex-grow cursor-pointer">
          <img
            src={
              product.imageUrl ||
              "https://placehold.co/400x400/f3f4f6/9ca3af?text=Produk"
            }
            alt={product.name}
            height="400"
            width="400"
            className="object-contain h-48 w-full"
            loading="lazy"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold line-clamp-2">
            {product.name}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
            {product.description}
          </p>
        </Link>
        <button
          onClick={handleAddToCartClick}
          className="rounded-full pl-4 pr-1 py-1 text-white flex items-center justify-between space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 w-full transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-700"
        >
          <span>Tambah Keranjang</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(product.price)}
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
};

export default ProductCard;
