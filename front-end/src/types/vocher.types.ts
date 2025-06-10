// src/types/voucher.types.ts

export enum VoucherType {
  PERCENTAGE = "PERCENTAGE",
  FIXED = "FIXED",
}

export interface Voucher {
  id: number;
  code: string;
  description?: string;
  discount_value: number;
  discount_type: VoucherType;
  max_discount?: number;
  min_purchase: number;
  valid_from: string;
  valid_until: string;
  usage_limit: number;
  current_usage: number;
}

// Data yang dibutuhkan untuk membuat voucher baru
export type CreateVoucherDTO = Omit<Voucher, "id" | "current_usage">;

// Data yang bisa diubah pada voucher
export type UpdateVoucherDTO = Partial<CreateVoucherDTO>;

// Payload untuk menerapkan voucher ke keranjang
export interface ApplyVoucherPayload {
  code: string;
  subTotal: number; // Subtotal belanja untuk validasi min_purchase
}

// Respons setelah menerapkan voucher
export interface ApplyVoucherResponse {
  discountAmount: number;
  finalPrice: number;
  message: string;
}
