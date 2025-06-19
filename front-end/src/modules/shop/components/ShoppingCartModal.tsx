// src/components/shop/ShoppingCartModal.tsx (File yang sudah diperbaiki)

"use client";

import React from "react";
import { useNavigate, Link } from "@tanstack/react-router"; // Gunakan Link untuk navigasi
import { motion, AnimatePresence } from "framer-motion";

// UI Components
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

// Icons & Types
import { IconShoppingCart, IconX, IconTrash } from "@tabler/icons-react";
import { CartItem } from "@/hooks/useCart"; // Impor tipe dari useCart

// Definisikan props dengan lebih lengkap
interface ShoppingCartModalProps {
  cartItems: CartItem[];
  totalItems: number;
  cartTotal: number;
  onUpdateCartItemQuantity: (productId: number, newQuantity: number) => void;
  onRemoveCartItem: (productId: number) => void;
  onClearCart: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ShoppingCartModal: React.FC<ShoppingCartModalProps> = ({
  cartItems,
  totalItems,
  cartTotal,
  onUpdateCartItemQuantity,
  onRemoveCartItem,
  onClearCart,
  open,
  onOpenChange,
}) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    onOpenChange(false); // Tutup modal dulu
    navigate({ to: "/shop/checkout" }); // Arahkan ke halaman checkout
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full h-10 w-10 text-stone-600 dark:text-stone-300 hover:bg-rose-100 dark:hover:bg-neutral-800"
        >
          <IconShoppingCart size={22} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Button>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <Dialog>
            <DialogHeader className="mb-4 text-center">
              <DialogTitle className="text-2xl font-bold text-stone-800 dark:text-stone-100">
                Keranjang Belanja
              </DialogTitle>
              {cartItems.length === 0 && (
                <DialogDescription className="pt-2">
                  Keranjang Anda masih kosong.
                </DialogDescription>
              )}
            </DialogHeader>

            {cartItems.length > 0 ? (
              <>
                <ScrollArea className="h-[45vh] pr-4">
                  <div className="flex flex-col gap-4">
                    <AnimatePresence>
                      {cartItems.map((item) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            x: -20,
                            transition: { duration: 0.2 },
                          }}
                          key={item.id}
                          className="flex items-center gap-4"
                        >
                          <img
                            src={
                              item.imageUrl || "https://placehold.co/100x100"
                            }
                            alt={item.name}
                            className="h-16 w-16 object-cover rounded-lg"
                          />
                          <div className="flex-grow">
                            <h3 className="font-medium text-sm text-stone-800 dark:text-stone-200">
                              {item.name}
                            </h3>
                            <p className="text-xs text-stone-500">
                              {formatCurrency(item.price)}
                            </p>
                            <div className="flex items-center gap-2 mt-1.5">
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-6 w-6 rounded-full"
                                onClick={() =>
                                  onUpdateCartItemQuantity(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                              >
                                -
                              </Button>
                              <span className="text-sm font-medium w-6 text-center">
                                {item.quantity}
                              </span>
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-6 w-6 rounded-full"
                                onClick={() =>
                                  onUpdateCartItemQuantity(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                              >
                                +
                              </Button>
                            </div>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-stone-400 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-full h-8 w-8"
                            onClick={() => onRemoveCartItem(item.id)}
                          >
                            <IconX size={16} />
                          </Button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </ScrollArea>
                <Separator className="my-4 dark:bg-neutral-700" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-600 dark:text-stone-400">
                      Subtotal
                    </span>
                    <span className="font-medium">
                      {formatCurrency(cartTotal)}
                    </span>
                  </div>
                  {/* Anda bisa tambahkan logika diskon di sini jika perlu */}
                  <div className="flex justify-between text-base font-bold text-stone-800 dark:text-stone-100 pt-2">
                    <span>Total</span>
                    <span>{formatCurrency(cartTotal)}</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-stone-500 flex flex-col items-center gap-4">
                <IconShoppingCart
                  size={48}
                  className="text-stone-300 dark:text-neutral-700"
                />
                <p>
                  Mulai belanja dan isi keranjang Anda dengan kue-kue lezat!
                </p>
                <Button
                  asChild
                  className="bg-rose-500 hover:bg-rose-600"
                  onClick={() => onOpenChange(false)}
                >
                  <Link to="/shop">Belanja Sekarang</Link>
                </Button>
              </div>
            )}
          </Dialog>
        </ModalContent>

        {cartItems.length > 0 && (
          <ModalFooter className="gap-3 pt-6">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-100"
              onClick={onClearCart}
            >
              <IconTrash size={16} className="mr-2" /> Kosongkan
            </Button>
            <Button
              className="w-full sm:w-auto flex-grow bg-rose-500 hover:bg-rose-600"
              onClick={handleCheckout}
            >
              Lanjut ke Pembayaran
            </Button>
          </ModalFooter>
        )}
      </ModalBody>
    </Modal>
  );
};

export default ShoppingCartModal;
