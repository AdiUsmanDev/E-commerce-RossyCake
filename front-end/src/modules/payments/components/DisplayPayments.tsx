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
import { IconSearch } from "@tabler/icons-react"; // Atau Lucide Search
import {
  PaymentHistoryItem,
  SavedPaymentMethod,
  NewPaymentMethodForm,
} from "./types";
import { dummyPaymentHistory, dummySavedMethods } from "./data";
import { PaymentHistoryTable } from "./components/PaymentHistoryTable";
import { SavedPaymentMethodsSection } from "./components/SavedPaymentMethodsSection";
import { AddPaymentMethodDialog } from "./components/AddPaymentMethodDialog";
import { Button } from "@/components/ui/button"; // Untuk error handling

const DisplayPayments: React.FC = () => {
  const [paymentHistory, setPaymentHistory] = useState<PaymentHistoryItem[]>(
    []
  );
  const [savedMethods, setSavedMethods] = useState<SavedPaymentMethod[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true); // State untuk loading data awal
  const [error, setError] = useState<string | null>(null); // State untuk error

  const [isAddMethodDialogOpen, setIsAddMethodDialogOpen] = useState(false);

  // Simulasi pengambilan data
  useEffect(() => {
    setIsLoading(true);
    // Simulasi fetch data
    setTimeout(() => {
      setPaymentHistory(dummyPaymentHistory);
      setSavedMethods(dummySavedMethods);
      setIsLoading(false);
    }, 500); // Delay kecil untuk simulasi
  }, []);

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
      // TODO: Panggil API untuk hapus di backend
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
    // TODO: Panggil API untuk set default di backend
    console.log("Metode pembayaran default diubah:", methodId);
  };

  const handleAddNewMethodSubmit = (data: NewPaymentMethodForm) => {
    console.log("Metode baru akan ditambahkan:", data);
    // TODO: Validasi data dan panggil API untuk simpan metode baru
    // Setelah berhasil, update state savedMethods
    const newMethod: SavedPaymentMethod = {
      id: `new_method_${Date.now()}`, // ID sementara, backend akan generate ID sebenarnya
      type: data.type,
      providerName: data.providerName,
      details:
        data.type === "Credit Card"
          ? `**** **** **** ${data.cardNumber?.slice(-4)}`
          : data.ewalletPhoneNumber || "N/A",
      expiryDate: data.expiryDate,
      isDefault: data.isDefault || savedMethods.length === 0,
    };
    setSavedMethods((prev) => [...prev, newMethod]);
    setIsAddMethodDialogOpen(false); // Tutup dialog
  };

  const handleViewPaymentDetails = (paymentId: string) => {
    console.log("Lihat detail untuk pembayaran:", paymentId);
    // Logika untuk menampilkan detail pembayaran, mungkin membuka modal lain atau halaman baru
    alert(`Detail untuk pembayaran ${paymentId} akan ditampilkan di sini.`);
  };

  if (isLoading) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        Memuat data pembayaran...
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className="space-y-8">
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
              placeholder="Cari di riwayat (ID, Pesanan, Metode, Status)..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent>
          <PaymentHistoryTable
            payments={filteredPaymentHistory}
            onViewDetails={handleViewPaymentDetails}
          />
        </CardContent>
      </Card>

      <SavedPaymentMethodsSection
        methods={savedMethods}
        onDeleteMethod={handleDeleteSavedMethod}
        onSetDefault={handleSetDefaultMethod}
        onAddMethod={() => setIsAddMethodDialogOpen(true)}
      />

      <AddPaymentMethodDialog
        open={isAddMethodDialogOpen}
        onOpenChange={setIsAddMethodDialogOpen}
        onSubmit={handleAddNewMethodSubmit}
      />
    </div>
  );
};

export default DisplayPayments;
