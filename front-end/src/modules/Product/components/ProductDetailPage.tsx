"use client";

import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router"; // Menggunakan Link dari TanStack Router
import { toast } from "react-hot-toast"; // <-- Impor yang hilang

// UI Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";

// Icons
import {
  IconMinus,
  IconPlus,
  IconShoppingCart,
  IconAlertCircle,
  IconStar,
} from "@tabler/icons-react";

// Services, Types, dan Hook
import { getProductById, getProducts } from "@/services/product.service";
import { Product } from "@/types/product.types";
import { useCart, CartItem } from "@/hooks/useCart"; // Impor CartItem juga
import ProductCard from "@/modules/home/components/ProductCard";

// ===================================================================
// Definisi Tipe untuk Props (Memperbaiki error `any`)
// ===================================================================
interface ImageGalleryProps {
  product: Product;
  selectedImage: string | null;
  setSelectedImage: (url: string) => void;
}

interface PurchasePanelProps {
  product: Product;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  onAddToCart: () => void;
  itemInCart: CartItem | undefined;
}

interface ProductInfoTabsProps {
  product: Product;
}

// ===================================================================
// Sub-Komponen
// ===================================================================

/** Komponen untuk menampilkan galeri gambar produk. */
const ImageGallery: React.FC<ImageGalleryProps> = ({
  product,
  selectedImage,
  setSelectedImage,
}) => {
  const galleryImages = [
    product.imageUrl,
    "https://placehold.co/600x600/fed7aa/9c4a00",
    "https://placehold.co/600x600/fecaca/991b1b",
  ].filter(Boolean) as string[];

  return (
    <div className="sticky top-24 space-y-4">
      <div className="aspect-square w-full overflow-hidden rounded-xl shadow-lg bg-neutral-100 dark:bg-neutral-800">
        <img
          src={
            selectedImage ||
            "https://placehold.co/600x600/f9fafb/9ca3af?text=Rossi+Cake"
          }
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-300"
        />
      </div>
      <div className="flex gap-2">
        {galleryImages.map((imgUrl, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(imgUrl)}
            className={`h-20 w-20 rounded-md overflow-hidden transition-all ${selectedImage === imgUrl ? "ring-2 ring-rose-500 ring-offset-2" : "opacity-70 hover:opacity-100"}`}
          >
            <img
              src={imgUrl}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

/** Komponen untuk panel aksi pembelian (kuantitas, harga, tombol). */
const PurchasePanel: React.FC<PurchasePanelProps> = ({
  product,
  quantity,
  setQuantity,
  onAddToCart,
  itemInCart,
}) => {
  const isOutOfStock = product.stock === 0;
  const subtotalForQuantity = product.price * quantity;
  const isButtonDisabled =
    isOutOfStock || (itemInCart != null && itemInCart.quantity === quantity);

  return (
    <div className="rounded-lg border dark:border-neutral-700 p-4 space-y-4 mt-4 bg-neutral-50 dark:bg-neutral-800/30">
      <div className="flex items-center justify-between gap-4">
        <p className="font-medium text-lg">Jumlah</p>
        <div className="flex items-center gap-2 rounded-full border dark:border-neutral-600 p-1 bg-white dark:bg-neutral-900">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={isOutOfStock}
          >
            <IconMinus size={16} />
          </Button>
          <span className="w-10 text-center font-semibold">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
            disabled={isOutOfStock}
          >
            <IconPlus size={16} />
          </Button>
        </div>
      </div>
      <p className="text-right text-sm text-neutral-600 dark:text-neutral-400">
        Subtotal:{" "}
        <span className="font-bold text-lg text-rose-600">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(subtotalForQuantity)}
        </span>
      </p>
      <Button
        onClick={onAddToCart}
        size="lg"
        className="w-full bg-rose-500 hover:bg-rose-600 rounded-full text-base"
        disabled={isButtonDisabled}
      >
        <IconShoppingCart className="mr-2" size={20} />
        {itemInCart ? "Update Keranjang" : "Tambah ke Keranjang"}
      </Button>
    </div>
  );
};

/** Komponen untuk menampilkan informasi detail dalam bentuk Tabs. */
const ProductInfoTabs: React.FC<ProductInfoTabsProps> = ({ product }) => (
  <Tabs defaultValue="description" className="w-full mt-6">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="description">Deskripsi</TabsTrigger>
      <TabsTrigger value="reviews">Ulasan</TabsTrigger>
    </TabsList>
    <TabsContent
      value="description"
      className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed pt-4"
    >
      {product.description || "Tidak ada deskripsi untuk produk ini."}
    </TabsContent>
    <TabsContent value="reviews" className="pt-4">
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <IconStar key={i} className="text-amber-400 fill-amber-400" />
        ))}
        <span className="ml-2 font-semibold">5.0 (Berdasarkan 2 ulasan)</span>
      </div>
      <p>Ulasan akan segera hadir!</p>
    </TabsContent>
  </Tabs>
);

/** Komponen Skeleton untuk UI Loading. */
const ProductDetailSkeleton: React.FC = () => (
  <GuestLayouts>
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="h-6 w-2/5 rounded bg-gray-200 dark:bg-neutral-700 mb-6 animate-pulse"></div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-4">
          <div className="aspect-square w-full rounded-xl bg-gray-200 dark:bg-neutral-700"></div>
          <div className="flex gap-2">
            <div className="w-24 h-24 rounded-lg bg-gray-200 dark:bg-neutral-700"></div>
            <div className="w-24 h-24 rounded-lg bg-gray-200 dark:bg-neutral-700"></div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-5">
          <div className="h-10 w-3/4 rounded-lg bg-gray-200 dark:bg-neutral-700"></div>
          <div className="h-8 w-1/3 rounded-lg bg-gray-200 dark:bg-neutral-700"></div>
          <div className="h-10 w-full rounded-full bg-gray-200 dark:bg-neutral-700"></div>
          <div className="pt-4 space-y-4">
            <div className="h-12 w-full rounded-lg bg-gray-200 dark:bg-neutral-700"></div>
            <div className="h-12 w-full rounded-lg bg-gray-200 dark:bg-neutral-700"></div>
          </div>
        </div>
      </div>
    </div>
  </GuestLayouts>
);

// ===================================================================
// Komponen Halaman Utama
// ===================================================================
export const ProductDetailPage = () => {
  const { productId } = useParams({ from: "/product/$productId" });
  const { cart, addToCart, updateQuantity } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const itemInCart = useMemo(
    () => cart.find((item) => item.id === parseInt(productId, 10)),
    [cart, productId]
  );

  useEffect(() => {
    setQuantity(itemInCart?.quantity || 1);
  }, [itemInCart]);

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId,
    onSuccess: (data) => setSelectedImage(data.imageUrl || null),
  });

  const { data: relatedProductsData } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts({ limit: 8 }),
  });
  const relatedProducts = relatedProductsData?.products; // Ambil array produk dari data

  const handleAddToCartClick = () => {
    if (!product) return;
    if (itemInCart) {
      updateQuantity(product.id, quantity);
      toast.success(`Jumlah "${product.name}" di keranjang diupdate!`);
    } else {
      addToCart(product, quantity);
    }
  };

  if (isLoading) return <ProductDetailSkeleton />;
  if (isError || !product) {
    return (
      <GuestLayouts>
        <div className="container mx-auto text-center py-20 flex flex-col items-center justify-center">
          <IconAlertCircle size={48} className="text-red-500 mb-4" />
          <h2 className="text-2xl font-bold">Gagal Memuat Produk</h2>
          <p className="text-muted-foreground">
            {(error as Error)?.message || "Produk tidak ditemukan."}
          </p>
        </div>
      </GuestLayouts>
    );
  }

  const isOutOfStock = product.stock === 0;

  return (
    <GuestLayouts>
      <div className="bg-white dark:bg-neutral-950">
        <div className="container mx-auto max-w-6xl px-4 py-6 md:py-12">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                  Beranda
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/shop">
                  Toko
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            <div className="lg:col-span-3">
              <ImageGallery
                product={product}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-3">
                {product.category && (
                  <Badge className="w-fit bg-rose-100 text-rose-800 hover:bg-rose-200 dark:bg-rose-900/50 dark:text-rose-300">
                    {product.category}
                  </Badge>
                )}
                <h1 className="text-3xl lg:text-4xl font-bold text-stone-800 dark:text-stone-100">
                  {product.name}
                </h1>
                <p className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(product.price)}
                </p>
                <Badge variant={isOutOfStock ? "destructive" : "default"}>
                  {isOutOfStock
                    ? "Stok Habis"
                    : `Tersisa: ${product.stock} buah`}
                </Badge>
                <PurchasePanel
                  product={product}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  onAddToCart={handleAddToCartClick}
                  itemInCart={itemInCart}
                />
                <ProductInfoTabs product={product} />
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24">
            <h2 className="text-2xl font-bold text-center mb-8">
              Anda Mungkin Juga Suka
            </h2>
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {relatedProducts
                  ?.filter((p) => p.id !== product.id)
                  .map((p) => (
                    <CarouselItem
                      key={p.id}
                      className="md:basis-1/2 lg:basis-1/4"
                    >
                      <ProductCard
                        product={p}
                        onAddToCart={(prod) => addToCart(prod, 1)}
                      />
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </GuestLayouts>
  );
};
