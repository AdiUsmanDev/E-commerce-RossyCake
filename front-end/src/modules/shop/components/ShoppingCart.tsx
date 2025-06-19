"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import ShoppingCartModal from "./ShoppingCartModal";

export const ShoppingCart = () => {
  const [open, setOpen] = useState(false);

  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    cartTotal,
  } = useCart();

  return (
    <ShoppingCartModal
      cartItems={cart}
      totalItems={totalItems}
      cartTotal={cartTotal}
      open={open}
      onOpenChange={setOpen}
      onUpdateCartItemQuantity={updateQuantity}
      onRemoveCartItem={removeFromCart}
      onClearCart={clearCart}
    />
  );
};
