// src/features/user-account/payments/DisplayPayments.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import { PaymentHistoryItem, SavedPaymentMethod } from "@/data/payments/types";
import { PaymentHistoryTable } from "./PaymentHistoryTable";
import { SavedPaymentMethods } from "./SavedPaymentMethods";
import { AddPaymentMethodDialog } from "./AddPaymentMethodDialog";
import { dummyPaymentHistory, dummySavedMethods } from "@/data/payments/data";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";

const DisplayPayments: React.FC = () => {
  const [paymentHistory, setPaymentHistory] =
    useState<PaymentHistoryItem[]>(dummyPaymentHistory);
  const [savedMethods, setSavedMethods] =
    useState<SavedPaymentMethod[]>(dummySavedMethods);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddMethodDialogOpen, setIsAddMethodDialogOpen] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredPaymentHistory = paymentHistory.filter(
    (payment) =>
      payment.paymentId.toLowerCase().includes(searchQuery) ||
      payment.orderId.toLowerCase().includes(searchQuery) ||
      payment.method.toLowerCase().includes(searchQuery) ||
      payment.status.toLowerCase().includes(searchQuery) ||
      (payment.description &&
        payment.description.toLowerCase().includes(searchQuery))
  );

  const handleDeleteSavedMethod = (methodId: string) => {
    if (
      window.confirm("Apakah Anda yakin ingin menghapus metode pembayaran ini?")
    ) {
      setSavedMethods((prev) =>
        prev.filter((method) => method.id !== methodId)
      );
      console.log("Metode pembayaran dihapus:", methodId);
    }
  };

  const handleSetDefaultMethod = (methodId: string) => {
    setSavedMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isDefault: method.id === methodId,
      }))
    );
    console.log("Metode pembayaran default diubah:", methodId);
  };

  const handleAddNewMethod = (data: any) => {
    // Ganti 'any' dengan tipe form yang benar
    console.log("Metode baru ditambahkan:", data);
    // Logika untuk menambah metode baru ke state savedMethods
    const newMethod: SavedPaymentMethod = {
      id: `new_${Date.now()}`,
      type: data.type || "Credit Card", // Ambil dari form
      providerName: data.providerName,
      details: data.details,
      expiryDate: data.expiryDate,
      isDefault: savedMethods.length === 0, // Jadikan default jika ini yang pertama
    };
    setSavedMethods((prev) => [...prev, newMethod]);
  };

  return (
    <GuestLayouts>
      <div className="container mx-auto px-18 py-10 space-y-8">
        {" "}
        {/* Memberi jarak antar Card */}
        {/* Riwayat Pembayaran */}
        <Card className="dark:border-neutral-700">
          <CardHeader>
            <CardTitle>Riwayat Pembayaran</CardTitle>
            <CardDescription>
              Lihat semua transaksi dan pembayaran yang telah Anda lakukan.
            </CardDescription>
            <div className="relative pt-2">
              <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Cari di riwayat pembayaran..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <PaymentHistoryTable payments={filteredPaymentHistory} />
          </CardContent>
        </Card>
        {/* Metode Pembayaran Tersimpan */}
        <SavedPaymentMethods
          methods={savedMethods}
          onDeleteMethod={handleDeleteSavedMethod}
          onSetDefault={handleSetDefaultMethod}
          onAddMethod={() => setIsAddMethodDialogOpen(true)}
        />
        {/* Dialog untuk Tambah Metode Pembayaran Baru */}
        <AddPaymentMethodDialog
          open={isAddMethodDialogOpen}
          onOpenChange={setIsAddMethodDialogOpen}
          onSubmit={handleAddNewMethod}
        />
      </div>
    </GuestLayouts>
  );
};

export default DisplayPayments;
