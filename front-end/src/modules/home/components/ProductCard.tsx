// src/components/shared/ProductCard.tsx

import { Link } from "@tanstack/react-router";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product.types";
import { useCart } from "@/hooks/useCart"; // <-- Impor useCart untuk mengecek item

// Tipe untuk props agar lebih jelas
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cart } = useCart();
  const itemInCart = cart.find((item) => item.id === product.id);

  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const isOutOfStock = product.stock === 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="h-full group">
      <BackgroundGradient
        className="rounded-2xl h-full flex flex-col p-1 bg-white dark:bg-neutral-800"
        containerClassName="h-full"
      >
        <Link
          to={"/product/$productId"}
          params={{ productId: product.id.toString() }}
          className="h-full flex flex-col p-4 rounded-xl bg-white dark:bg-neutral-800"
        >
          {/* Bagian Gambar */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={
                product.imageUrl ||
                "https://placehold.co/400x400/f9fafb/9ca3af?text=Rossi+Cake"
              }
              alt={product.name}
              className="object-cover w-full aspect-square transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute top-2 left-2 flex flex-col gap-1.5">
              {isOutOfStock && (
                <Badge variant="destructive" className="shadow">
                  Stok Habis
                </Badge>
              )}
              {product.category && (
                <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 dark:bg-rose-900/50 dark:text-rose-300 shadow">
                  {product.category}
                </Badge>
              )}
            </div>
            {/* Tanda centang jika sudah di keranjang */}
            {itemInCart && (
              <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Bagian Detail Teks */}
          <div className="flex flex-col flex-grow mt-4">
            <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 line-clamp-3 flex-grow">
              {product.description}
            </p>

            {/* Harga dan Tombol */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xl font-extrabold text-rose-600 dark:text-rose-400">
                {formatPrice(product.price)}
              </p>
              <Button
                size="icon"
                onClick={handleAddToCartClick}
                disabled={isOutOfStock}
                aria-label="Tambah ke Keranjang"
                className={`text-white rounded-full h-10 w-10 shrink-0 transition-colors
                           ${
                             isOutOfStock
                               ? "bg-stone-300 cursor-not-allowed dark:bg-neutral-700"
                               : itemInCart
                                 ? "bg-green-500 hover:bg-green-600" // Warna hijau jika sudah di keranjang
                                 : "bg-stone-800 hover:bg-rose-500 dark:bg-rose-600 dark:hover:bg-rose-500"
                           }`}
              >
                <IconShoppingCartPlus size={20} />
              </Button>
            </div>
          </div>
        </Link>
      </BackgroundGradient>
    </div>
  );
};

export default ProductCard;
