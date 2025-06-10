// src/features/checkout/konfirmasi/OrderedItemsSummary.tsx

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";
import { OrderItem } from "@/types/order.types";

// Helper untuk format mata uang
const formatCurrency = (amount: number | string) => {
  const numericAmount =
    typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numericAmount)) {
    return "Rp 0";
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(numericAmount);
};

// Props disederhanakan, hanya menerima 'items' dari pesanan
interface OrderedItemsSummaryProps {
  items: OrderItem[];
}

const OrderedItemsSummary: React.FC<OrderedItemsSummaryProps> = ({ items }) => {
  // Jika tidak ada item, tampilkan pesan kosong
  if (!items || items.length === 0) {
    return (
      <Card className="shadow-sm dark:border-neutral-700">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Package size={20} /> Produk Dipesan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center py-4">
            Tidak ada item dalam pesanan ini.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm dark:border-neutral-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Package size={20} /> Produk Dipesan
        </CardTitle>
      </CardHeader>
      <CardContent>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 py-3 border-b dark:border-neutral-700 last:border-b-0"
          >
            <img
              // Menggunakan data dari 'item.product' dan fallback jika tidak ada gambar
              src={
                item.product?.imageUrl ||
                "https://placehold.co/80x80/e2e8f0/e2e8f0?text=Produk"
              }
              alt={item.product?.name || "Gambar Produk"}
              className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-md"
            />
            <div className="flex-grow">
              <p className="font-medium text-sm text-neutral-800 dark:text-neutral-100">
                {item.product?.name || "Nama produk tidak tersedia"}
              </p>
              {item.product?.category && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {item.product.category}
                </p>
              )}
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                {item.quantity} x {formatCurrency(item.price)}
              </p>
            </div>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
              {/* Menghitung subtotal */}
              {formatCurrency(parseFloat(item.price) * item.quantity)}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default OrderedItemsSummary;
