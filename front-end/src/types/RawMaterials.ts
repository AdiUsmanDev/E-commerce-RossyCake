// src/types/raw_material.types.ts

// Interface utama untuk objek Bahan Baku, sesuai dengan model Prisma
export interface RawMaterial {
  id: number;
  name: string;
  stock: number; // Prisma Decimal sering diserialisasi sebagai number
  unit: string;
  reorder_level: number;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

// Tipe data untuk payload saat MEMBUAT bahan baku baru.
// Sesuai dengan skema Joi `createRawMaterialSchema`.
export interface CreateRawMaterialPayload {
  name: string;
  stock: number;
  unit: string;
  reorder_level?: number;
}

// Tipe data untuk payload saat MEMPERBARUI bahan baku.
// Sesuai dengan skema Joi `updateRawMaterialSchema`, semua opsional.
export interface UpdateRawMaterialPayload {
  name?: string;
  stock?: number;
  unit?: string;
  reorder_level?: number;
}

// Tipe data untuk payload saat MENYESUAIKAN stok.
// Sesuai dengan skema Joi `adjustStockSchema`.
export interface AdjustStockPayload {
  adjustment: number; // Bisa positif (menambah) atau negatif (mengurangi)
  notes?: string;
}
