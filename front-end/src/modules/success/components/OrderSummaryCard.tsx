import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Order } from "@/types/order.types"; // Asumsi tipe ini ada
import { MapPin, ShoppingBag } from "lucide-react";

// Helper Functions
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

const formatDate = (dateString: string | Date) => {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

interface OrderSummaryCardProps {
  order: Order;
}

export const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({
  order,
}) => {
  return (
    <Card className="w-full max-w-4xl mx-auto dark:bg-neutral-800/50 dark:border-neutral-700">
      <CardHeader>
        <CardTitle className="text-xl">Rincian Pesanan</CardTitle>
      </CardHeader>
      <CardContent className="text-sm space-y-6">
        {/* Order Details Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <p className="text-muted-foreground">Nomor Pesanan</p>
            <p className="font-mono font-medium">#{order.id}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">Tanggal Pesanan</p>
            <p className="font-medium">{formatDate(order.order_date)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">Metode Pembayaran</p>
            <p className="font-medium">{order.payment?.payment_method}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">Status Pesanan</p>
            <p className="font-medium capitalize">
              {order.status.replace(/_/g, " ").toLowerCase()}
            </p>
          </div>
        </div>

        <Separator className="my-4 dark:bg-neutral-700" />

        {/* Shipping and Items Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shipping Address */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <MapPin size={16} />
              Alamat Pengiriman
            </h4>
            <div className="p-4 bg-muted/50 dark:bg-neutral-900/50 rounded-md text-muted-foreground space-y-1">
              <p className="font-bold text-foreground">
                {order.shipping_address.recipient}
              </p>
              <p>{order.shipping_address.phone}</p>
              <p>{`${order.shipping_address.street}, ${order.shipping_address.city}, ${order.shipping_address.province} ${order.shipping_address.postal_code}`}</p>
            </div>
            <p className="text-xs text-muted-foreground">
              Dikirim dengan:{" "}
              <span className="font-semibold">{order.shipping_method}</span>
            </p>
          </div>

          {/* Items Ordered */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <ShoppingBag size={16} />
              Item yang Dipesan
            </h4>
            <div className="space-y-3">
              {order.order_items?.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        item.product?.imageUrl ||
                        "https://placehold.co/64x64/e2e8f0/e2e8f0?text=Img"
                      }
                      alt={item.product?.name}
                      className="h-12 w-12 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-medium text-foreground">
                        {item.product?.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.quantity} x {formatCurrency(item.price)}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium text-foreground">
                    {formatCurrency(parseFloat(item.price) * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-4 dark:bg-neutral-700" />

        {/* Financial Summary */}
        <div className="space-y-2 max-w-sm ml-auto">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatCurrency(order.sub_total)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Ongkos Kirim</span>
            <span>{formatCurrency(order.shipping_cost)}</span>
          </div>
          {order.discount_amount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Diskon</span>
              <span>- {formatCurrency(order.discount_amount)}</span>
            </div>
          )}
          <Separator className="my-2 dark:bg-neutral-700" />
          <div className="flex justify-between text-base font-bold">
            <span>TOTAL PEMBAYARAN</span>
            <span>{formatCurrency(order.total_price)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
