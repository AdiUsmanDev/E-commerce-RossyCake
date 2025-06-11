// src/types/voucher.types.ts

// Enum untuk tipe diskon, mencerminkan skema Joi dan Prisma
export enum VoucherType {
  PERCENTAGE = "PERCENTAGE",
  FIXED = "FIXED",
  FREE_SHIPPING = "FREE_SHIPPING", // Menggunakan snake_case yang benar
}

// Interface utama untuk objek Voucher yang diterima dari API
export interface Voucher {
  id: number;
  code: string;
  description: string | null;
  discount_type: VoucherType;
  discount_value: number;
  max_discount: number | null;
  min_purchase: number;
  usage_limit: number;
  current_usage: number;
  valid_from: string; // Tipe ISO date string
  valid_until: string; // Tipe ISO date string
  created_at: string;
  updated_at: string;
}

// Tipe data untuk payload saat MEMBUAT voucher baru.
// Disesuaikan dengan skema validasi Joi.
export interface CreateVoucherDTO {
  code: string;
  description?: string;
  discount_type: VoucherType;
  discount_value: number;
  max_discount?: number;
  min_purchase?: number;
  valid_until: string; // ISO date string
  usage_limit: number;
}

// Tipe data untuk payload saat MEMPERBARUI voucher.
// Hanya field yang diizinkan oleh skema validasi Joi.
export interface UpdateVoucherDTO {
  description?: string;
  valid_until?: string; // ISO date string
  usage_limit?: number;
}
