// src/pages/checkout/index.tsx (atau path yang sesuai)

"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

// --- UI & Ikon ---
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import {
  ChevronLeft,
  ShoppingCart as ShoppingCartIcon,
  LoaderCircle,
} from "lucide-react";

// --- Hooks, Provider, Servis & Tipe Data ---
import { useCart } from "@/hooks/useCart";
import { createOrder } from "@/services/order.service";
import { createVirtualAccountPayment } from "@/services/payments.service";
import { CreatePaymentPayload } from "@/types/payment.types";
import ShippingAddressForm from "@/modules/checkout/components/ShippingAddressForm.tsx";
import ShippingAndPaymentOptions from "@/modules/checkout/components/ShippingAndPaymentOptions";
import OrderSummaryCard from "@/modules/checkout/components/OrderSummaryCard";
import { CreateOrderDTO } from "@/types/Checkout.type";
import { CheckoutProvider, useCheckout } from "@/hooks/useCheckoutState";
// Komponen untuk menampilkan loading awal atau keranjang kosong
const InitialStateDisplay: React.FC = () => {
  const { isMounted, cart } = useCart();
  const navigate = useNavigate();

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <LoaderCircle className="animate-spin h-12 w-12 text-rose-500" />
      </div>
    );
  }

  if (isMounted && cart.length === 0) {
    return (
      <div className="container mx-auto text-center py-20">
        <ShoppingCartIcon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-semibold mb-2">Keranjang Anda Kosong</h1>
        <p className="text-muted-foreground mb-4">
          Sepertinya Anda belum memilih kue lezat kami.
        </p>
        <Button
          onClick={() => navigate({ to: "/shop" })}
          className="bg-rose-500 hover:bg-rose-600"
        >
          Kembali ke Toko
        </Button>
      </div>
    );
  }
  return null;
};

// Komponen inti yang berisi form dan logika submit
const CheckoutFormContent = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const { state } = useCheckout();
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const { mutate: processPayment, isPending: isCreatingPayment } = useMutation({
    mutationFn: (data: CreatePaymentPayload) =>
      createVirtualAccountPayment(data),
    onSuccess: (result) => {
      clearCart();
      localStorage.removeItem("rossi-cake-checkout-details");
      localStorage.setItem(
        "rossi-cake-saved-address",
        JSON.stringify(state.shippingAddress)
      );
      navigate({ to: `/shop/checkout/${result.paymentUrl.order.id}` });
    },
    onError: (err) => toast.error((err as Error).message),
  });

  const { mutate: processOrder, isPending: isCreatingOrder } = useMutation({
    mutationFn: (data: CreateOrderDTO) => createOrder(data),
    onSuccess: (createdOrder) => {
      toast.success("Pesanan berhasil dibuat!");
      processPayment({
        order_id: createdOrder.id,
        bank:
          state.selectedPaymentId === "bank_transfer"
            ? state.selectedBankId
            : undefined,
      });
    },
    onError: (err) => toast.error((err as Error).message),
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { shippingAddress } = state;
    // Validasi sederhana
    for (const key of Object.keys(shippingAddress) as Array<
      keyof typeof shippingAddress
    >) {
      if (!shippingAddress[key]) {
        toast.error(`Kolom Alamat "${key.replace("_", " ")}" wajib diisi.`);
        return;
      }
    }
    if (!state.selectedShipping) {
      toast.error("Metode pengiriman wajib dipilih.");
      return;
    }
    setIsConfirmDialogOpen(true);
  };

  const handleConfirmAndProcessOrder = () => {
    if (!state.selectedShipping) return;
    const orderPayload: CreateOrderDTO = {
      items: cart.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
      shipping_cost: Number(state.selectedShipping.cost), // <-- Aman dari 'any'
      shipping_method: state.selectedShipping.name,
      shipping_address: state.shippingAddress,
      voucher_id: state.selectedVoucher?.id || null,
    };
    processOrder(orderPayload);
  };

  // Jangan tampilkan form jika keranjang kosong
  if (cart.length === 0) return null;

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate({ to: -1 })}
            >
              <ChevronLeft size={16} className="mr-1.5" />
              Kembali
            </Button>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/cart">Keranjang</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detail Pemesanan</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold mb-8">Lengkapi Detail Pemesanan</h1>
      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
      >
        <div className="lg:col-span-2 space-y-6">
          <ShippingAddressForm />
          <ShippingAndPaymentOptions />
        </div>
        <div className="lg:col-span-1 sticky top-24">
          <OrderSummaryCard
            isProcessing={isCreatingOrder || isCreatingPayment}
          />
        </div>
      </form>
      <AlertDialog
        open={isConfirmDialogOpen}
        onOpenChange={setIsConfirmDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Pesanan Anda</AlertDialogTitle>
            <AlertDialogDescription>
              Pastikan semua data yang Anda masukkan sudah benar sebelum
              melanjutkan ke pembayaran.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmAndProcessOrder}
              disabled={isCreatingOrder || isCreatingPayment}
            >
              {isCreatingOrder || isCreatingPayment ? (
                <LoaderCircle className="animate-spin mr-2" />
              ) : null}
              Ya, Lanjutkan Pesanan
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

// ===================================================================
// EXPORT HALAMAN UTAMA DENGAN PROVIDER
// ===================================================================
const NewCheckoutPage: React.FC = () => (
  <GuestLayouts>
    <CheckoutProvider>
      <InitialStateDisplay />
      <CheckoutFormContent />
    </CheckoutProvider>
  </GuestLayouts>
);

export default NewCheckoutPage;
