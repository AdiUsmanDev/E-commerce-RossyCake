// src/components/checkout/ShippingAndPaymentOptions.tsx

"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Truck, Tag } from "lucide-react";
import { toast } from "react-hot-toast";

// Hooks, Tipe, dan Data
import { useCheckout } from "@/hooks/useCheckoutState";
import { Voucher } from "@/types/vocher.types";
import { ShippingMethod } from "@/types/shipping.type";
import { useQuery } from "@tanstack/react-query";
import { getAllVouchers } from "@/services/vocher.service";
import { getAllShippingMethods } from "@/services/shipping.service";

// Data statis kini bisa dikelola di sini, membuatnya lebih mandiri
const PAYMENT_METHODS = [
  { id: "bank_transfer", name: "Virtual Account" },
  { id: "gopay", name: "GoPay (Segera hadir)", disabled: true },
];
const AVAILABLE_BANKS = [
  { id: "bca", name: "Bank BCA" },
  { id: "bni", name: "Bank BNI" },
  { id: "bri", name: "Bank BRI" },
];

// Komponen ini kini hanya memerlukan data dinamis dari luar
interface ShippingAndPaymentOptionsProps {
  shippingOptions: ShippingMethod[];
  vouchers: Voucher[];
}

const ShippingAndPaymentOptions: React.FC<
  ShippingAndPaymentOptionsProps
> = () => {
  // 1. Mengambil state dan dispatch dari hook terpusat
  const { state, dispatch } = useCheckout();
  const {
    selectedShipping,
    selectedPaymentId,
    selectedBankId,
    selectedVoucher,
  } = state;

  const { data: vouchers } = useQuery({
    queryKey: ["vouchers"], // unik identifier untuk query
    queryFn: getAllVouchers, // fungsi async untuk ambil data
  });
  const { data: shipping } = useQuery({
    queryKey: ["shipping"], // unik identifier untuk query
    queryFn: getAllShippingMethods, // fungsi async untuk ambil data
  });

  const handleShippingChange = (shippingId: string) => {
    const newShipping = shipping.find(
      (opt) => opt.id.toString() === shippingId
    );
    if (newShipping) {
      dispatch({ type: "SET_SHIPPING", payload: newShipping });
    }
  };

  const handleVoucherChange = (voucherIdStr: string) => {
    const voucherId = parseInt(voucherIdStr, 10);
    if (isNaN(voucherId) || voucherId === 0) {
      dispatch({ type: "SET_VOUCHER", payload: null });
      return;
    }
    const newVoucher = vouchers.find((v) => v.id === voucherId);
    if (newVoucher) {
      dispatch({ type: "SET_VOUCHER", payload: newVoucher });
      toast.success(`Voucher "${newVoucher.code}" berhasil diterapkan!`);
    }
  };

  return (
    <Card className="bg-white dark:bg-neutral-800/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5 text-stone-800 dark:text-stone-100">
          <Truck size={22} className="text-rose-500" />
          Opsi Pengiriman & Pembayaran
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {/* Metode Pengiriman */}
        <div className="space-y-2">
          <Label htmlFor="shipping-method">Metode Pengiriman</Label>
          <Select
            onValueChange={handleShippingChange}
            value={selectedShipping?.id.toString()}
            disabled={shipping?.length === 0}
          >
            <SelectTrigger id="shipping-method">
              <SelectValue placeholder="Pilih Pengiriman..." />
            </SelectTrigger>
            <SelectContent>
              {shipping?.map((option) => (
                <SelectItem key={option.id} value={option.id.toString()}>
                  {option.name} -{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(option.cost as any)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Metode Pembayaran */}
        <div className="space-y-2">
          <Label htmlFor="payment-method">Metode Pembayaran</Label>
          <Select
            onValueChange={(value) =>
              dispatch({ type: "SET_PAYMENT", payload: value })
            }
            value={selectedPaymentId}
          >
            <SelectTrigger id="payment-method">
              <SelectValue placeholder="Pilih Pembayaran" />
            </SelectTrigger>
            <SelectContent>
              {PAYMENT_METHODS?.map((method) => (
                <SelectItem
                  key={method.id}
                  value={method.id}
                  disabled={method.disabled}
                >
                  {method.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pilihan Bank (Kondisional) */}
        {selectedPaymentId === "bank_transfer" && (
          <div className="space-y-2">
            <Label htmlFor="bank-selection">Pilih Bank Virtual Account</Label>
            <Select
              onValueChange={(value) =>
                dispatch({ type: "SET_BANK", payload: value })
              }
              value={selectedBankId}
            >
              <SelectTrigger id="bank-selection">
                <SelectValue placeholder="Pilih Bank..." />
              </SelectTrigger>
              <SelectContent>
                {AVAILABLE_BANKS?.map((bank) => (
                  <SelectItem key={bank.id} value={bank.id}>
                    {bank.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Pilihan Voucher */}
        <div className="md:col-span-2 space-y-2">
          <Label
            htmlFor="voucher-selection"
            className="flex items-center gap-1.5"
          >
            <Tag size={16} /> Gunakan Voucher
          </Label>
          <Select
            onValueChange={handleVoucherChange}
            value={selectedVoucher?.id.toString() ?? "0"}
          >
            <SelectTrigger id="voucher-selection">
              <SelectValue placeholder="Pilih Voucher..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Tidak menggunakan voucher</SelectItem>
              {vouchers?.map((voucher) => (
                <SelectItem key={voucher.id} value={voucher.id.toString()}>
                  {voucher.code} - Potongan{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(voucher.discount_value)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShippingAndPaymentOptions;
