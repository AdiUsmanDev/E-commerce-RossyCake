import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Truck, Tag } from "lucide-react";
import { Voucher } from "@/types/vocher.types";

interface Option {
  id: string;
  name: string;
}

interface ShippingAndPaymentOptionsProps {
  shippingOptions: (Option & { cost: number })[];
  selectedShippingId: string;
  onShippingChange: (id: string) => void;

  paymentMethods: Option[];
  selectedPaymentId: string;
  onPaymentChange: (id: string) => void;

  // Props baru untuk Voucher
  vouchers: Voucher[];
  selectedVoucherId: number | null;
  onVoucherChange: (id: string) => void;
  availableBanks: Option[];
  selectedBankId: string;
  onBankChange: (id: string) => void;
  // Menggunakan string dari Select
}

const ShippingAndPaymentOptions: React.FC<ShippingAndPaymentOptionsProps> = ({
  shippingOptions,
  selectedShippingId,
  onShippingChange,
  paymentMethods,
  selectedPaymentId,
  onPaymentChange,
  vouchers,
  selectedVoucherId,
  onVoucherChange,
  availableBanks,
  selectedBankId,
  onBankChange,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck size={20} /> Opsi Pesanan
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <Label>Metode Pengiriman</Label>
          <Select onValueChange={onShippingChange} value={selectedShippingId}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Pengiriman" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {shippingOptions.map((opt) => (
                  <SelectItem key={opt.id} value={opt.id}>
                    {opt.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>Metode Pembayaran</Label>
          <Select onValueChange={onPaymentChange} value={selectedPaymentId}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Pembayaran" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {paymentMethods.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {selectedPaymentId === "bank_transfer" && (
            <div className="md:col-span-2 space-y-1.5">
              <Label>Pilih Bank</Label>
              <Select onValueChange={onBankChange} value={selectedBankId}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Bank Virtual Account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {availableBanks.map((b) => (
                      <SelectItem key={b.id} value={b.id}>
                        {b.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* Bagian Baru untuk Voucher */}
        <div className="md:col-span-2 space-y-1.5">
          <Label className="flex items-center gap-1.5">
            <Tag size={16} /> Gunakan Voucher
          </Label>
          <Select
            onValueChange={onVoucherChange}
            value={selectedVoucherId?.toString() ?? "0"}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Voucher" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0">Tidak menggunakan voucher</SelectItem>
                {vouchers.map((v) => (
                  <SelectItem key={v.id} value={v.id.toString()}>
                    {v.description} (-
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(v.discount_value)}
                    )
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShippingAndPaymentOptions;
