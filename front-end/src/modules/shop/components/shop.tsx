import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import HeaderMarket from "./headerMarket";
import ListProduct from "./listProduct";
import { CartItem, Product } from "@/types/product.types";
import { shopProducts } from "@/data/dumyProducts";
import { useState } from "react";

const shop = () => {
  const [products, setProducts] = useState<Product[]>(shopProducts); // Daftar semua produk
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Item di keranjang

  // Fungsi untuk menangani penambahan ke keranjang
  const handleAddToCart = (productToAdd: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === productToAdd.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
    // Optional: Buka modal keranjang setelah menambah item
    // setIsCartModalOpen(true); // Anda perlu state isCartModalOpen di sini jika ingin kontrol dari sini
  };

  // Fungsi untuk update kuantitas item di keranjang
  const handleUpdateCartItemQuantity = (
    productId: string,
    quantity: number
  ) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) => (item.id === productId ? { ...item, quantity } : item))
          .filter((item) => item.quantity > 0) // Hapus jika kuantitas jadi 0 atau kurang
    );
  };

  // Fungsi untuk menghapus item dari keranjang
  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Fungsi untuk mengosongkan keranjang
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Jika Anda perlu fetch data produk dari API:
  // useEffect(() => {
  //   // fetchProducts().then(data => setProducts(data));
  // }, []);

  return (
    <GuestLayouts>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-20 md:pt-24">
        <HeaderMarket
          cartItems={cartItems}
          onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
          onRemoveCartItem={handleRemoveCartItem}
          onClearCart={handleClearCart}
        />
        <ListProduct products={products} onAddToCart={handleAddToCart} />
      </div>
    </GuestLayouts>
  );
};

export default shop;
