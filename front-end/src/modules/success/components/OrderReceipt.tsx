// src/app/order-success/OrderReceipt.tsx

import React from "react";
import { Order as OrderType } from "@/types/order.types";

interface OrderReceiptProps {
  order: OrderType;
}

// Helper untuk memformat mata uang agar kode lebih bersih
const formatCurrency = (value: string | number) => {
  const numberValue = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(numberValue)) {
    return "Rp0";
  }
  return `Rp${numberValue.toLocaleString("id-ID")}`;
};

// PERBAIKAN: Pastikan menggunakan 'export const' untuk named export
export const OrderReceipt = React.forwardRef<HTMLDivElement, OrderReceiptProps>(
  ({ order }, ref) => {
    // Validasi dasar untuk objek-objek penting
    const shippingAddress = order.shipping_address || {};
    const paymentInfo = order.payment || {};
    const orderItems = order.order_items || [];

    return (
      <div
        ref={ref}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full border"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Struk Pesanan</h2>
            <p className="text-gray-500 font-mono">#{order.id}</p>
          </div>
          <div className="text-left sm:text-right mt-4 sm:mt-0">
            <h3 className="text-lg font-semibold text-gray-800">Rossi Cake</h3>
            <p className="text-sm text-gray-500">Perumahan Mendalo Asri</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-2 text-gray-700">Dikirim ke:</h4>
            <p className="text-gray-600">
              {shippingAddress.street || "Alamat tidak tersedia"}
            </p>
            <p className="text-gray-600">{shippingAddress.city || ""}</p>
            <p className="text-gray-600">
              Telp: {shippingAddress.phone || "-"}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-700">Info Pesanan:</h4>
            <p className="text-gray-600">
              Tanggal:{" "}
              {new Date(order.order_date).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-600">Pengiriman: {order.shipping_method}</p>
            <p className="text-gray-600">
              Status Pembayaran:{" "}
              <span className="font-semibold text-green-600">
                {paymentInfo.status}
              </span>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-700">Rincian Item:</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-2 px-4 font-medium text-gray-600">
                    Produk
                  </th>
                  <th className="py-2 px-4 text-center font-medium text-gray-600">
                    Jumlah
                  </th>
                  <th className="py-2 px-4 text-right font-medium text-gray-600">
                    Harga Satuan
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 px-4 text-gray-800">
                      {item.product?.name || `Produk #${item.product_id}`}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      {item.quantity}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-600 font-mono">
                      {formatCurrency(item.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-full max-w-sm">
            <div className="flex justify-between py-1 text-gray-600">
              <span>Subtotal</span>
              <span className="font-mono">
                {formatCurrency(order.sub_total)}
              </span>
            </div>
            <div className="flex justify-between py-1 text-gray-600">
              <span>Biaya Pengiriman</span>
              <span className="font-mono">
                {formatCurrency(order.shipping_cost)}
              </span>
            </div>
            <div className="flex justify-between py-1 text-gray-600">
              <span>Diskon</span>
              <span className="font-mono">
                - {formatCurrency(order.discount_amount)}
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 mt-2 border-t text-gray-800">
              <span>Total Pembayaran</span>
              <span className="font-mono">
                {formatCurrency(order.total_price)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center text-sm text-gray-500">
          <p>Terima kasih telah berbelanja!</p>
          <p>
            Pembayaran lunas melalui{" "}
            {paymentInfo.payment_method?.replace("_", " ")} pada{" "}
            {new Date(paymentInfo.updated_at).toLocaleString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    );
  }
);

OrderReceipt.displayName = "OrderReceipt";
