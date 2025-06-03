// src/features/user-account/payments/components/AddPaymentMethodDialog.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NewPaymentMethodForm, SavedPaymentMethodType } from "../types"; // Impor tipe
import { Checkbox } from "@/components/ui/checkbox"; // Asumsi ada komponen Checkbox

interface AddPaymentMethodDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: NewPaymentMethodForm) => void;
}

export const AddPaymentMethodDialog: React.FC<AddPaymentMethodDialogProps> = ({
  open,
  onOpenChange,
  onSubmit,
}) => {
  const [methodType, setMethodType] =
    useState<SavedPaymentMethodType>("Credit Card");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newMethodData: NewPaymentMethodForm = {
      type: formData.get("type") as SavedPaymentMethodType,
      providerName: (formData.get("providerName") as string) || undefined,
      cardNumber: (formData.get("cardNumber") as string) || undefined,
      cardHolderName: (formData.get("cardHolderName") as string) || undefined,
      expiryDate: (formData.get("expiryDate") as string) || undefined,
      cvv: (formData.get("cvv") as string) || undefined,
      ewalletPhoneNumber:
        (formData.get("ewalletPhoneNumber") as string) || undefined,
      isDefault: (formData.get("isDefault") as string) === "on",
    };
    onSubmit(newMethodData);
    onOpenChange(false); // Tutup dialog setelah submit
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Tambah Metode Pembayaran Baru</DialogTitle>
          <DialogDescription>
            Masukkan detail metode pembayaran Anda. Informasi ini akan disimpan
            dengan aman.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="type">Tipe Metode</Label>
              <Select
                name="type"
                value={methodType}
                onValueChange={(value) =>
                  setMethodType(value as SavedPaymentMethodType)
                }
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Pilih tipe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Credit Card">
                    Kartu Kredit/Debit
                  </SelectItem>
                  <SelectItem value="E-Wallet">E-Wallet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {methodType === "Credit Card" && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor="cardHolderName"
                    className="text-right col-span-1"
                  >
                    Nama di Kartu
                  </Label>
                  <Input
                    id="cardHolderName"
                    name="cardHolderName"
                    placeholder="Nama Lengkap Anda"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cardNumber" className="text-right col-span-1">
                    Nomor Kartu
                  </Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="**** **** **** ****"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Kadaluarsa (MM/YY)</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      placeholder="***"
                      type="password"
                    />
                  </div>
                </div>
              </>
            )}

            {methodType === "E-Wallet" && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor="providerNameEwallet"
                    className="text-right col-span-1"
                  >
                    Nama E-Wallet
                  </Label>
                  <Select name="providerName">
                    <SelectTrigger
                      id="providerNameEwallet"
                      className="col-span-3"
                    >
                      <SelectValue placeholder="Pilih E-Wallet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GoPay">GoPay</SelectItem>
                      <SelectItem value="OVO">OVO</SelectItem>
                      <SelectItem value="Dana">Dana</SelectItem>
                      {/* Tambah provider lain */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor="ewalletPhoneNumber"
                    className="text-right col-span-1"
                  >
                    Nomor Telepon
                  </Label>
                  <Input
                    id="ewalletPhoneNumber"
                    name="ewalletPhoneNumber"
                    placeholder="0812..."
                    type="tel"
                    className="col-span-3"
                  />
                </div>
              </>
            )}
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox id="isDefault" name="isDefault" />
              <Label htmlFor="isDefault" className="text-sm font-normal">
                Jadikan metode pembayaran utama
              </Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Batal
              </Button>
            </DialogClose>
            <Button type="submit">Simpan Metode</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
