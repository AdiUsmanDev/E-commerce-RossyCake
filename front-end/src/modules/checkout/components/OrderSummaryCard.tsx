import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ReceiptText, LoaderCircle } from "lucide-react";
import { CartItem } from "@/types/product.types";

interface OrderSummaryCardProps {
  cartItems: CartItem[];
  subtotal: number;
  shippingCost: number;
  voucherDiscount: number; // Prop baru
  total: number;
  isCreatingOrder: boolean;
  formError: string | null;
}

const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({
  cartItems,
  subtotal,
  shippingCost,
  voucherDiscount,
  total,
  isCreatingOrder,
  formError,
}) => {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ReceiptText size={20} /> Ringkasan Pesanan
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-muted-foreground"
          >
            <span>
              {item.name} <small>x{item.quantity}</small>
            </span>
            <span>{formatCurrency(item.price * item.quantity)}</span>
          </div>
        ))}
        <Separator className="my-2" />
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Ongkos Kirim</span>
          <span>{formatCurrency(shippingCost)}</span>
        </div>
        {/* Menampilkan diskon jika ada */}
        {voucherDiscount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Diskon Voucher</span>
            <span>- {formatCurrency(voucherDiscount)}</span>
          </div>
        )}
        <Separator className="my-2" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </CardContent>
      <CardContent>
        {formError && (
          <p className="text-sm text-destructive mb-4">{formError}</p>
        )}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isCreatingOrder}
        >
          {isCreatingOrder ? (
            <LoaderCircle className="animate-spin mr-2" />
          ) : null}
          Lanjut ke Pembayaran
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderSummaryCard;
