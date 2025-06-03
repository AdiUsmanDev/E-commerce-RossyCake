// src/features/user-account/payments/types.ts

export type PaymentMethodType =
  | "Credit Card"
  | "Bank Transfer"
  | "GoPay"
  | "OVO"
  | "PayPal"
  | string;
export type PaymentStatusType = "Success" | "Failed" | "Pending" | "Refunded";
export type SavedPaymentMethodType = "Credit Card" | "E-Wallet";
export type CardProviderType = "Visa" | "Mastercard" | string; // Memungkinkan provider kartu lain
export type EWalletProviderType = "GoPay" | "OVO" | "Dana" | string; // Memungkinkan provider e-wallet lain

export interface PaymentHistoryItem {
  paymentId: string;
  orderId: string;
  date: string; // Format YYYY-MM-DD
  time: string; // Format HH:MM
  amount: number;
  method: PaymentMethodType;
  status: PaymentStatusType;
  description?: string;
}

export interface SavedPaymentMethod {
  id: string;
  type: SavedPaymentMethodType;
  providerName?: CardProviderType | EWalletProviderType;
  details: string; // e.g., "**** **** **** 1234" atau "0812-XXXX-XX90" atau nama akun
  expiryDate?: string; // MM/YY untuk kartu
  isDefault?: boolean;
}

// Tipe untuk data form saat menambah metode pembayaran baru
export interface NewPaymentMethodForm {
  type: SavedPaymentMethodType;
  providerName?: string;
  cardNumber?: string; // Untuk Kartu Kredit
  cardHolderName?: string; // Untuk Kartu Kredit
  expiryDate?: string; // Untuk Kartu Kredit
  cvv?: string; // Untuk Kartu Kredit
  ewalletPhoneNumber?: string; // Untuk E-Wallet
  isDefault?: boolean;
}
