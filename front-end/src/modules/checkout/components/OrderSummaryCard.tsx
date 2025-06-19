// src/components/checkout/OrderSummaryCard.tsx (Versi Final)

"use client";

import React, { useMemo } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckoutState";
import { LoaderCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface OrderSummaryCardProps {
  isProcessing: boolean;
}

const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({
  isProcessing,
}) => {
  const { cart, cartTotal } = useCart();
  const { state } = useCheckout();
  const { selectedShipping, selectedVoucher } = state;

  const { shippingCost, voucherDiscount, total } = useMemo(() => {
    // Gunakan Number() untuk konversi yang aman, default ke 0 jika null/undefined
    const cost = Number(selectedShipping?.cost || 0);
    const discount = Number(selectedVoucher?.discount_value || 0);
    const finalTotal = cartTotal + cost - discount;
    return {
      shippingCost: cost,
      voucherDiscount: discount,
      total: Math.max(0, finalTotal),
    };
  }, [cartTotal, selectedShipping, selectedVoucher]);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    // Beri style pada Card agar sesuai tema
    <Card className="shadow-lg bg-stone-50 dark:bg-neutral-800/50">
      <CardHeader>
        <CardTitle>Ringkasan Pesanan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="max-h-60 pr-3">
          <div className="space-y-2 text-sm">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span className="text-muted-foreground truncate pr-2">
                  {item.name} <span className="text-xs">x{item.quantity}</span>
                </span>
                <span className="font-medium flex-shrink-0">
                  {formatCurrency(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Separator />
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatCurrency(cartTotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Pengiriman</span>
            {/* Peningkatan: Tampilkan placeholder jika biaya belum ada */}
            <span>{selectedShipping ? formatCurrency(shippingCost) : "-"}</span>
          </div>
          {voucherDiscount > 0 && (
            <div className="flex justify-between text-green-600 dark:text-green-400">
              <span>Diskon Voucher</span>
              <span>- {formatCurrency(voucherDiscount)}</span>
            </div>
          )}
        </div>
        <Separator />
        <div className="flex justify-between font-bold text-lg">
          <p>Total</p>
          <p>{formatCurrency(total)}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full bg-rose-500 hover:bg-rose-600"
    
          disabled={isProcessing || !selectedShipping}
        >
          {isProcessing && <LoaderCircle className="animate-spin mr-2" />}
          Buat Pesanan
        </Button>
      </CardFooter>
    </Card>
  );
};
export default OrderSummaryCard;
