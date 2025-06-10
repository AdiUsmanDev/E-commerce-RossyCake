// src/features/checkout/konfirmasi/PaymentDetailsAndAction.tsx

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ShieldCheck, LoaderCircle, Copy, Banknote } from "lucide-react";
import { Order as OrderType } from "@/types/order.types"; // Asumsi tipe ini diimpor
import { Label } from "@/components/ui/label";

// Helper untuk format mata uang
const formatCurrency = (amount: number | string) => {
  const numericAmount =
    typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numericAmount)) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(numericAmount);
};

// Helper untuk memformat nama metode pembayaran
const formatPaymentMethod = (method: string) => {
  return method.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

interface PaymentDetailsAndActionProps {
  order: OrderType;
  isProcessing: boolean;
  onConfirmAndPay: () => void;
}

const PaymentDetailsAndAction: React.FC<PaymentDetailsAndActionProps> = ({
  order,
  isProcessing,
  onConfirmAndPay,
}) => {
  // Destructuring data dari order untuk kode yang lebih bersih
  const {
    sub_total,
    shipping_cost,
    shipping_method,
    discount_amount,
    total_price,
    payment,
  } = order;

  // Menyiapkan data pembayaran dengan pengecekan null-safe
  const paymentMethodFormatted = payment?.payment_method
    ? formatPaymentMethod(payment.payment_method)
    : "Metode Tidak Diketahui";

  const paymentCode = payment?.payment_code || "";

  const handleCopyToClipboard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      alert("Kode pembayaran berhasil disalin!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert("Gagal menyalin kode.");
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-sm dark:border-neutral-700 sticky top-24">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Ringkasan Pembayaran</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-600 dark:text-neutral-400">
              Subtotal Produk
            </span>
            <span className="text-neutral-800 dark:text-neutral-100">
              {formatCurrency(sub_total)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-600 dark:text-neutral-400">
              Ongkos Kirim ({shipping_method})
            </span>
            <span className="text-neutral-800 dark:text-neutral-100">
              {formatCurrency(shipping_cost)}
            </span>
          </div>
          {parseFloat(String(discount_amount)) > 0 && (
            <div className="flex justify-between text-green-600 dark:text-green-400">
              <span>Diskon Voucher</span>
              <span>- {formatCurrency(discount_amount)}</span>
            </div>
          )}
          <Separator className="my-2 dark:bg-neutral-700" />
          <div className="flex justify-between font-bold text-lg text-neutral-900 dark:text-neutral-50 pt-1">
            <span>Total Pembayaran</span>
            <span>{formatCurrency(total_price)}</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pt-4 border-t dark:border-neutral-700">
          <div className="w-full text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 flex items-center justify-center gap-2">
              <Banknote size={18} /> {paymentMethodFormatted} {payment?.bank}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
              Selesaikan pembayaran sebelum pesanan dibatalkan.
            </p>
          </div>

          {paymentCode && (
            <div className="w-full flex flex-col gap-2 pt-2">
              <Label
                htmlFor="paymentCode"
                className="text-xs font-medium text-neutral-700 dark:text-neutral-300"
              >
                Kode Pembayaran / Nomor Virtual Account
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="paymentCode"
                  readOnly
                  value={paymentCode}
                  className="text-center font-mono tracking-widest text-base bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleCopyToClipboard(paymentCode)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          <Button
            onClick={onConfirmAndPay}
            disabled={isProcessing}
            className="w-full text-md py-3 mt-2"
            size="lg"
          >
            {isProcessing ? (
              <LoaderCircle className="animate-spin mr-2 h-5 w-5" />
            ) : (
              <ShieldCheck className="mr-2 h-5 w-5" />
            )}
            {isProcessing ? "Memproses..." : "Saya Sudah Bayar"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentDetailsAndAction;
