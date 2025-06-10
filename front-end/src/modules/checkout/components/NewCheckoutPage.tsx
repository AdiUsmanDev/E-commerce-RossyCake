"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  ChevronLeft,
  ShoppingCart as ShoppingCartIcon,
  LoaderCircle as PageLoader,
} from "lucide-react";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import { useRouter, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CartItem } from "@/types/product.types";
import { ShippingAddress } from "@/types/Checkout.type";
import { Voucher } from "@/types/vocher.types";
import { getAllVouchers } from "@/services/vocher.service";
import { CreatePaymentPayload } from "@/types/payment.types";
import { createVirtualAccountPayment } from "@/services/payments.service";
import { CreateOrderDTO } from "@/types/order.types";
import { createOrder } from "@/services/order.service";
import ShippingAndPaymentOptions from "./ShippingAndPaymentOptions";
import ShippingAddressForm from "./ShippingAddressForm.tsx";
import OrderSummaryCard from "./OrderSummaryCard.tsx";

// --- Data Konfigurasi ---
const SHIPPING_OPTIONS = [
  { id: "JNE REG", name: "JNE Regular (2-3 Hari)", cost: 18000 },
  { id: "SiCepat BEST", name: "SiCepat BEST (1-2 Hari)", cost: 25000 },
];
const PAYMENT_METHODS = [
  { id: "bank_transfer", name: "Virtual Account" },
  { id: "gopay", name: "GoPay" },
];
const AVAILABLE_BANKS = [
  { id: "bca", name: "Bank BCA" },
  { id: "bni", name: "Bank BNI" },
  { id: "bri", name: "Bank BRI" },
  { id: "mandiri", name: "Bank Mandiri" },
  { id: "bsi", name: "Bank Syariah Indonesia" },
];

const NewCheckoutPage: React.FC = () => {
  const router = useRouter();
  const navigate = useNavigate();

  // === State Management ===
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    recipient: "",
    phone: "",
    street: "",
    city: "",
    province: "",
    postal_code: "",
  });

  const [selectedBank, setSelectedBank] = useState(AVAILABLE_BANKS[0]);
  const [selectedShipping, setSelectedShipping] = useState(SHIPPING_OPTIONS[0]);
  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHODS[0]);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null); // State baru untuk voucher
  const [formError, setFormError] = useState<string | null>(null);

  // === Fetch Data ===
  useEffect(() => {
    const loadedCart = localStorage.getItem("shopCart");
    if (loadedCart) setCartItems(JSON.parse(loadedCart));
  }, []);

  const { data: vouchers = [], isLoading: isLoadingVouchers } = useQuery<
    Voucher[]
  >({
    queryKey: ["availableVouchers"],
    queryFn: getAllVouchers,
  });

  // === Perhitungan Total ===
  const { subtotal, voucherDiscount, total } = useMemo(() => {
    const sub = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    // Logika diskon bisa lebih kompleks (persentase, maks diskon, dll)
    const discount = selectedVoucher ? selectedVoucher.discount_value : 0;
    const tot = sub + selectedShipping.cost - discount;
    return {
      subtotal: sub,
      voucherDiscount: discount,
      total: tot > 0 ? tot : 0,
    };
  }, [cartItems, selectedShipping, selectedVoucher]);

  // === Mutasi ===
  const { mutate: processPayment, isPending: isCreatingPayment } = useMutation({
    mutationFn: (paymentData: CreatePaymentPayload) =>
      createVirtualAccountPayment(paymentData),
    onSuccess: (paymentResult) => {
      navigate({
        to: `/shop/checkout/${paymentResult?.paymentUrl?.order?.id}`,
      });
    },
    onError: (err) => {
      setFormError(err.message || "Gagal membuat pembayaran.");
    },
  });

  const { mutate: processOrder, isPending: isCreatingOrder } = useMutation({
    mutationFn: (orderData: CreateOrderDTO) => createOrder(orderData),
    onSuccess: (createdOrder) => {
      localStorage.removeItem("shopCart");
      const paymentPayload: CreatePaymentPayload = {
        order_id: createdOrder.id,
        bank:
          selectedPayment.id === "bank_transfer" ? selectedBank.id : undefined, // Logika bank bisa ditambahkan kembali
      };
      processPayment(paymentPayload);
    },
    onError: (err) => {
      setFormError(err.message || "Terjadi kesalahan saat membuat pesanan.");
    },
  });

  // === Handlers ===
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress({ ...shippingAddress, [e.target.id]: e.target.value });
  };

  const handleShippingChange = (shippingId: string) => {
    const newShipping = SHIPPING_OPTIONS.find((opt) => opt.id === shippingId);
    if (newShipping) setSelectedShipping(newShipping);
  };

  const handlePaymentChange = (paymentId: string) => {
    const newPayment = PAYMENT_METHODS.find((p) => p.id === paymentId);
    if (newPayment) setSelectedPayment(newPayment);
  };

  const handleVoucherChange = (voucherIdStr: string) => {
    const voucherId = parseInt(voucherIdStr, 10);
    if (voucherId === 0) {
      setSelectedVoucher(null);
      return;
    }
    const newVoucher = vouchers.find((v) => v.id === voucherId);
    if (newVoucher) setSelectedVoucher(newVoucher);
  };

  const handleBankChange = (bankId: string) => {
    const newBank = AVAILABLE_BANKS.find((b) => b.id === bankId);
    if (newBank) setSelectedBank(newBank);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validasi alamat & keranjang
    for (const key in shippingAddress) {
      if (!shippingAddress[key as keyof ShippingAddress]) {
        setFormError(`Kolom "${key}" tidak boleh kosong.`);
        return;
      }
    }
    if (cartItems.length === 0) {
      setFormError("Keranjang Anda kosong.");
      return;
    }

    // Payload hanya untuk order
    const orderPayload: CreateOrderDTO = {
      items: cartItems.map((item) => ({
        product_id: Number(item.id),
        quantity: Number(item.quantity),
      })),
      shipping_cost: selectedShipping.cost,
      shipping_method: selectedShipping.id,
      shipping_address: shippingAddress,
      voucher_id: selectedVoucher?.id || null, // Kirim
    };

    // Proses order → dilanjutkan ke pembayaran saat `onSuccess`
    processOrder(orderPayload);
  };

  // === Render ===
  if (cartItems.length === 0 || isLoadingVouchers) {
    return (
      <GuestLayouts>
        <div className="container mx-auto flex justify-center items-center min-h-[calc(100vh-10rem)]">
          {isLoadingVouchers ? (
            <PageLoader className="animate-spin h-12 w-12" />
          ) : (
            <div className="text-center">
              <ShoppingCartIcon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <h1 className="text-2xl font-semibold mb-2">
                Keranjang Anda Kosong
              </h1>
              <Button onClick={() => navigate({ to: "/shop" })}>
                Kembali ke Toko
              </Button>
            </div>
          )}
        </div>
      </GuestLayouts>
    );
  }

  return (
    <GuestLayouts>
      <div className="container mx-auto px-2 sm:px-4 py-6 overflow-y-scroll ">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.history.go(-1)}
                className="text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft size={16} className="mr-1.5" /> Kembali
              </Button>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop/cart">Keranjang</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Formulir Pemesanan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
          Lengkapi Detail Pemesanan
        </h1>

        <form
          onSubmit={handleSubmitOrder}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-start"
        >
          <div className="lg:col-span-2 space-y-6">
            <ShippingAddressForm
              address={shippingAddress}
              onAddressChange={handleAddressChange}
            />
            <ShippingAndPaymentOptions
              shippingOptions={SHIPPING_OPTIONS}
              selectedShippingId={selectedShipping.id}
              onShippingChange={handleShippingChange}
              paymentMethods={PAYMENT_METHODS}
              selectedPaymentId={selectedPayment.id}
              onPaymentChange={handlePaymentChange}
              availableBanks={AVAILABLE_BANKS}
              selectedBankId={selectedBank.id}
              onBankChange={handleBankChange}
              vouchers={vouchers}
              selectedVoucherId={selectedVoucher?.id ?? null}
              onVoucherChange={handleVoucherChange}
            />
          </div>
          <div className="lg:col-span-1">
            <OrderSummaryCard
              cartItems={cartItems}
              subtotal={subtotal}
              shippingCost={selectedShipping.cost}
              voucherDiscount={voucherDiscount}
              total={total}
              isCreatingOrder={isCreatingOrder || isCreatingPayment}
              formError={formError}
            />
          </div>
        </form>
      </div>
    </GuestLayouts>
  );
};

export default NewCheckoutPage;
