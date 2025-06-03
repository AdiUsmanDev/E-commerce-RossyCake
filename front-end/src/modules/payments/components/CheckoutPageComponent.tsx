"use client"; // Jika menggunakan Next.js App Router

import React, { useState, useEffect, ReactNode } from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router"; // useNavigate untuk redirect setelah order
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Untuk pilihan metode pembayaran atau provinsi
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator"; // Komponen Separator
import { GuestLayouts } from "@/components/Layouts/GuestLayout"; // Asumsi Layout
import {
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  CreditCard,
  Landmark,
  MapPin,
  Package,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserCircle,
  Wallet,
} from "lucide-react"; // Ikon

// --- Definisi Tipe Data (jika belum diimpor) ---
interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description?: string;
}
interface CartItem extends Product {
  quantity: number;
}
interface ShippingAddress {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  province: string;
  postalCode: string;
  notes?: string;
}
const paymentMethodsData = [
  {
    id: "bank_transfer_bca",
    name: "Bank Transfer - BCA",
    icon: <Landmark className="mr-2 h-5 w-5" />,
    details: "Transfer ke rekening BCA kami.",
  },
  {
    id: "bank_transfer_mandiri",
    name: "Bank Transfer - Mandiri",
    icon: <Landmark className="mr-2 h-5 w-5" />,
    details: "Transfer ke rekening Mandiri kami.",
  },
  {
    id: "gopay",
    name: "GoPay",
    icon: <Wallet className="mr-2 h-5 w-5" />,
    details: "Bayar dengan saldo GoPay Anda.",
  },
  {
    id: "ovo",
    name: "OVO",
    icon: <Wallet className="mr-2 h-5 w-5" />,
    details: "Bayar dengan saldo OVO Anda.",
  },
  {
    id: "credit_card",
    name: "Kartu Kredit/Debit (Online)",
    icon: <CreditCard className="mr-2 h-5 w-5" />,
    details: "Visa, Mastercard, JCB. Diproses oleh Midtrans.",
  },
];
// --- Akhir Definisi Tipe ---

// --- Komponen untuk Form Alamat Pengiriman ---
interface ShippingAddressFormProps {
  address: ShippingAddress;
  onAddressChange: (field: keyof ShippingAddress, value: string) => void;
  onSubmit: () => void; // Dipanggil saat user ingin lanjut dari form ini
  isSubmitting?: boolean;
}
const ShippingAddressForm: React.FC<ShippingAddressFormProps> = ({
  address,
  onAddressChange,
  onSubmit,
  isSubmitting,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Nama Lengkap Penerima</Label>
          <Input
            id="fullName"
            name="fullName"
            value={address.fullName}
            onChange={(e) => onAddressChange("fullName", e.target.value)}
            required
            placeholder="Budi Setiawan"
          />
        </div>
        <div>
          <Label htmlFor="phone">Nomor Telepon</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={address.phone}
            onChange={(e) => onAddressChange("phone", e.target.value)}
            required
            placeholder="081234567890"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="addressLine1">Alamat Lengkap</Label>
        <Textarea
          id="addressLine1"
          name="addressLine1"
          value={address.addressLine1}
          onChange={(e) => onAddressChange("addressLine1", e.target.value)}
          required
          placeholder="Jl. Merdeka No. 17, RT 01/RW 02, Kelurahan..."
          rows={3}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="city">Kota/Kabupaten</Label>
          <Input
            id="city"
            name="city"
            value={address.city}
            onChange={(e) => onAddressChange("city", e.target.value)}
            required
            placeholder="Jakarta Selatan"
          />
        </div>
        <div>
          <Label htmlFor="province">Provinsi</Label>
          <Input
            id="province"
            name="province"
            value={address.province}
            onChange={(e) => onAddressChange("province", e.target.value)}
            required
            placeholder="DKI Jakarta"
          />
        </div>
        <div>
          <Label htmlFor="postalCode">Kode Pos</Label>
          <Input
            id="postalCode"
            name="postalCode"
            value={address.postalCode}
            onChange={(e) => onAddressChange("postalCode", e.target.value)}
            required
            placeholder="12345"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="notes">Catatan untuk Kurir (Opsional)</Label>
        <Input
          id="notes"
          name="notes"
          value={address.notes || ""}
          onChange={(e) => onAddressChange("notes", e.target.value)}
          placeholder="Contoh: Patokan rumah dekat masjid"
        />
      </div>
      {/* Tombol submit untuk form alamat bisa ada di sini, atau dikelola oleh parent */}
    </form>
  );
};

// --- Komponen untuk Pilihan Metode Pembayaran ---
interface PaymentMethodSelectorProps {
  selectedMethod: string | null;
  onSelectMethod: (methodId: string) => void;
}
const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  selectedMethod,
  onSelectMethod,
}) => {
  return (
    <div className="space-y-3">
      {paymentMethodsData.map((method) => (
        <Card
          key={method.id}
          onClick={() => onSelectMethod(method.id)}
          className={`cursor-pointer transition-all hover:shadow-md dark:hover:border-sky-600 ${selectedMethod === method.id ? "ring-2 ring-sky-500 border-sky-500 dark:border-sky-400" : "dark:border-neutral-700"}`}
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {React.cloneElement(method.icon as React.ReactElement, {
                className: `h-6 w-6 ${selectedMethod === method.id ? "text-sky-600 dark:text-sky-400" : "text-neutral-600 dark:text-neutral-400"}`,
              })}
              <div>
                <p
                  className={`font-medium ${selectedMethod === method.id ? "text-sky-700 dark:text-sky-300" : "text-neutral-800 dark:text-neutral-100"}`}
                >
                  {method.name}
                </p>
                {method.details && (
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {method.details}
                  </p>
                )}
              </div>
            </div>
            {selectedMethod === method.id && (
              <CheckCircle2 className="h-5 w-5 text-sky-500" />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// --- Komponen untuk Ringkasan Pesanan ---
interface OrderSummaryProps {
  cartItems: CartItem[];
  shippingCost: number;
  discountAmount: number;
}
const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  shippingCost,
  discountAmount,
}) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost - discountAmount;

  return (
    <Card className="sticky top-24 dark:border-neutral-700">
      {" "}
      {/* Sticky untuk desktop */}
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Package size={24} /> Ringkasan Pesanan
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <ScrollArea className="h-[150px] pr-3 mb-3">
          {" "}
          {/* Max height untuk daftar item jika banyak */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start text-sm py-1.5 border-b dark:border-neutral-700 last:border-b-0"
            >
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-100">
                  {item.name}{" "}
                  <span className="text-xs text-muted-foreground">
                    x{item.quantity}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Rp{item.price.toLocaleString("id-ID")}
                </p>
              </div>
              <p className="font-medium text-neutral-700 dark:text-neutral-200">
                Rp{(item.price * item.quantity).toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </ScrollArea>
        <Separator className="dark:bg-neutral-700" />
        <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rp{subtotal.toLocaleString("id-ID")}</span>
          </div>
          <div className="flex justify-between">
            <span>Ongkos Kirim</span>
            <span>Rp{shippingCost.toLocaleString("id-ID")}</span>
          </div>
          {discountAmount > 0 && (
            <div className="flex justify-between text-green-600 dark:text-green-400">
              <span>Diskon</span>
              <span>- Rp{discountAmount.toLocaleString("id-ID")}</span>
            </div>
          )}
        </div>
        <Separator className="dark:bg-neutral-700" />
        <div className="flex justify-between font-bold text-lg text-neutral-800 dark:text-neutral-100 pt-1">
          <span>Total Pembayaran</span>
          <span>Rp{total.toLocaleString("id-ID")}</span>
        </div>
      </CardContent>
    </Card>
  );
};

// --- Komponen Utama Halaman Checkout ---
function CheckoutPageComponent() {
  const navigate = useNavigate(); // Untuk redirect setelah berhasil
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: "",
    phone: "",
    addressLine1: "",
    city: "",
    province: "",
    postalCode: "",
    notes: "",
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const [isLoading, setIsLoading] = useState(false); // Untuk state loading saat proses order

  const SHIPPING_COST_PLACEHOLDER = 20000; // Contoh ongkos kirim
  const DISCOUNT_PLACEHOLDER =
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) >
    200000
      ? 15000
      : 0; // Contoh diskon

  useEffect(() => {
    // Ambil data keranjang dari localStorage
    const savedCart = localStorage.getItem("shopCart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart) && parsedCart.length > 0) {
          setCartItems(parsedCart);
        } else {
          // Keranjang kosong atau data tidak valid, redirect ke halaman toko atau keranjang
          // navigate({ to: '/shop/cart' }); // Asumsi ada halaman keranjang
        }
      } catch (error) {
        console.error("Gagal memuat keranjang dari localStorage:", error);
        // navigate({ to: '/shop/cart' });
      }
    } else {
      // Tidak ada keranjang, redirect
      // navigate({ to: '/shop/cart' });
    }

    // TODO: Ambil data alamat pengguna yang tersimpan jika ada (dari API/state global)
    // setShippingAddress(fetchedUserAddress);
  }, [navigate]);

  const handleAddressChange = (field: keyof ShippingAddress, value: string) => {
    setShippingAddress((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = async () => {
    if (!selectedPaymentMethod) {
      alert("Mohon pilih metode pembayaran terlebih dahulu.");
      return;
    }
    if (cartItems.length === 0) {
      alert("Keranjang Anda kosong. Tidak ada yang bisa di-checkout.");
      return;
    }
    // Validasi form alamat
    for (const key in shippingAddress) {
      if (
        key !== "addressLine2" &&
        key !== "notes" &&
        !shippingAddress[key as keyof ShippingAddress]
      ) {
        alert(
          `Mohon lengkapi field alamat: ${key.replace(/([A-Z])/g, " $1").trim()}`
        );
        return;
      }
    }

    setIsLoading(true);
    console.log("Memproses Pesanan:", {
      cartItems,
      shippingAddress,
      selectedPaymentMethod,
      subtotal: cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      shippingCost: SHIPPING_COST_PLACEHOLDER,
      discount: DISCOUNT_PLACEHOLDER,
      total:
        cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) +
        SHIPPING_COST_PLACEHOLDER -
        DISCOUNT_PLACEHOLDER,
    });

    // Simulasi proses order
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Setelah berhasil
    alert(
      "Pesanan berhasil dibuat! Anda akan diarahkan ke halaman konfirmasi."
    );
    localStorage.removeItem("shopCart"); // Kosongkan keranjang setelah berhasil
    setIsLoading(false);
    // navigate({ to: '/order-confirmation', state: { orderId: 'DUMMY_ORDER_ID_123'} }); // Redirect ke halaman konfirmasi
  };

  if (cartItems.length === 0 && !isLoading) {
    // Tambahkan !isLoading agar tidak tampil saat proses order
    return (
      <GuestLayouts>
        <div className="container mx-auto px-4 py-8 text-center">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h1 className="text-2xl font-semibold mb-2">Keranjang Anda Kosong</h1>
          <p className="text-muted-foreground mb-6">
            Sepertinya Anda belum menambahkan produk apapun ke keranjang.
          </p>
          <Button onClick={() => navigate({ to: "/shop/" })}>
            Kembali ke Toko
          </Button>
        </div>
      </GuestLayouts>
    );
  }

  return (
    <GuestLayouts>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-8 md:pt-12">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Toko</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop/cart">Keranjang</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Checkout</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-8">
          Proses Pembayaran
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Kolom Kiri: Alamat & Pembayaran */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <MapPin size={22} /> Alamat Pengiriman
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ShippingAddressForm
                  address={shippingAddress}
                  onAddressChange={handleAddressChange}
                  onSubmit={() => console.log("Alamat divalidasi")}
                />
              </CardContent>
            </Card>

            <Card className="dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <ShieldCheck size={22} /> Metode Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PaymentMethodSelector
                  selectedMethod={selectedPaymentMethod}
                  onSelectMethod={setSelectedPaymentMethod}
                />
              </CardContent>
            </Card>
          </div>

          {/* Kolom Kanan: Ringkasan Pesanan */}
          <div className="lg:col-span-1">
            <OrderSummary
              cartItems={cartItems}
              shippingCost={SHIPPING_COST_PLACEHOLDER}
              discountAmount={DISCOUNT_PLACEHOLDER}
            />
            <Button
              onClick={handlePlaceOrder}
              disabled={isLoading || cartItems.length === 0}
              className="w-full mt-6 bg-sky-600 hover:bg-sky-700 text-lg py-6"
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin mr-2 h-5 w-5" />
              ) : (
                <CreditCard className="mr-2 h-5 w-5" />
              )}
              {isLoading ? "Memproses..." : "Bayar Sekarang"}
            </Button>
          </div>
        </div>
      </div>
    </GuestLayouts>
  );
}

// --- TanStack Router Route Definition ---
// (Ini akan berada di file terpisah seperti src/app/shop/checkout/index.tsx atau checkout.route.tsx)
// export const Route = createLazyFileRoute("/shop/checkout")({
//   component: CheckoutPageComponent,
// });

// Untuk tujuan demo dalam satu file, kita bisa ekspor komponen utama:
export default CheckoutPageComponent; // Jika file ini adalah CheckoutPageComponent.tsx
