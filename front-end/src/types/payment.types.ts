import { order_items } from "./../../../Back-End/src/generated/prisma/index.d";
// Lokasi: src/types/payments.type.ts

// ✅ Enum status pembayaran berdasarkan status dari Midtrans dan skema internal
export enum PaymentStatus {
  PENDING = "pending", // Transaksi belum dibayar
  SETTLEMENT = "settlement", // Transaksi sukses dan dana sudah masuk
  CANCEL = "cancel", // Transaksi dibatalkan
  DENY = "deny", // Transaksi ditolak
  EXPIRE = "expire", // Transaksi kedaluwarsa
  FAILURE = "failure", // Terjadi error internal saat proses pembayaran
}

// ✅ Interface: Objek pembayaran lengkap seperti diterima dari API/backend
export interface Payment {
  id: number;
  order_id: number;
  transaction_status: PaymentStatus;
  amount: string; // Decimal diserialisasi sebagai string
  payment_method: string | null;
  payment_gateway: string;
  gateway_transaction_id: string | null;
  payment_code: string | null;
  bank: string | null;
  paymentUrl: paymentUrl;
  created_at: string; // ISO string
  paid_at: string | null;
  expires_at: string;
  updated_at: string;
}

export interface paymentUrl extends Payment {
  order: order_items;
}

// ✅ Interface: Payload untuk membuat pembayaran baru
export interface CreatePaymentPayload {
  order_id: number;
  bank?: string; // Dikirim hanya jika metode adalah VA (Virtual Account)
}

// ✅ Interface: Status pembayaran dari Midtrans (untuk pengecekan status)
export interface MidtransPaymentStatus {
  transaction_id: string;
  order_id: string;
  transaction_status:
    | "pending"
    | "settlement"
    | "deny"
    | "cancel"
    | "expire"
    | "failure"
    | "capture"; // capture untuk kartu kredit
  payment_type: string;
  fraud_status?: string;
  status_message: string;
  gross_amount: string;
  currency: string;
}
