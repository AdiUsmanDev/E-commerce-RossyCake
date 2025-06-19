// src/hooks/useCart.ts

import { useState, useEffect, useMemo } from "react";
import { toast } from "react-hot-toast";
import { Product } from "@/types/product.types";

export interface CartItem extends Product {
  quantity: number;
}

interface UseCartReturnType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  totalItems: number;
  itemCount: number;
  isMounted: boolean;
}

const CART_STORAGE_KEY = "rossi-cake-cart";

export const useCart = (): UseCartReturnType => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  
  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          throw new Error("Invalid cart format");
        }
      }
    } catch (error) {
      console.error("Gagal memuat keranjang dari localStorage", error);
      window.localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setIsMounted(true);
    }
  }, []);

  // Simpan cart ke localStorage setiap kali cart berubah
  useEffect(() => {
    if (isMounted) {
      try {
        window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      } catch (error) {
        console.error("Gagal menyimpan keranjang ke localStorage", error);
      }
    }
  }, [cart, isMounted]);

  // Tambahkan produk ke keranjang
  const addToCart = (product: Product, quantity: number) => {
    if (quantity <= 0) {
      toast.error("Jumlah harus lebih dari 0.", { id: "invalid-qty" });
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      const addedQty = Math.min(product.stock, quantity);

      if (existingItem) {
        toast.success(
          `${addedQty}x "${product.name}" ditambahkan ke keranjang!`,
          { id: `cart-add-${product.id}` }
        );
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Math.min(item.stock, item.quantity + addedQty),
              }
            : item
        );
      } else {
        toast.success(
          `${addedQty}x "${product.name}" ditambahkan ke keranjang!`,
          { id: `cart-add-${product.id}` }
        );
        return [...prevCart, { ...product, quantity: addedQty }];
      }
    });
  };

  // Perbarui kuantitas produk
  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const validatedQuantity = Math.max(
            1,
            Math.min(item.stock, newQuantity)
          );
          if (validatedQuantity !== newQuantity) {
            toast.error(
              `Stok untuk ${item.name} hanya tersisa ${item.stock} buah.`,
              { id: `stock-limit-${item.id}` }
            );
          }
          return { ...item, quantity: validatedQuantity };
        }
        return item;
      })
    );
  };

  // Hapus produk dari keranjang
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((item) => item.id === productId);
      if (itemToRemove) {
        toast.error(`"${itemToRemove.name}" dihapus dari keranjang.`, {
          id: `remove-${itemToRemove.id}`,
        });
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  // Kosongkan seluruh keranjang
  const clearCart = () => {
    setCart([]);
    toast.success("Keranjang berhasil dikosongkan.", { id: "clear-cart" });
  };

  // Hitung total item dan total harga
  const { totalItems, cartTotal } = useMemo(() => {
    return cart.reduce(
      (totals, item) => {
        totals.totalItems += item.quantity;
        totals.cartTotal += item.price * item.quantity;
        return totals;
      },
      { totalItems: 0, cartTotal: 0 }
    );
  }, [cart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    totalItems,
    itemCount: cart.length,
    isMounted,
  };
};
