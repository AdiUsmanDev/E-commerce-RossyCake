// src/types/product.types.ts

// Tipe data lengkap untuk objek Product sesuai skema Prisma
export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  category?: string;
  totalAmount: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface CreateProductPayload {
  name: string;
  price: number;
  stock: number;
  category: string;
  description?: string;
  image_url?: string;
}

// Tipe data untuk payload saat MEMPERBARUI produk.
// Menggunakan 'Partial' dari tipe Create, yang berarti semua field bersifat opsional.
// Ini memungkinkan Anda mengirim hanya field yang berubah.
export type UpdateProductPayload = Partial<CreateProductPayload>;

// Tipe data untuk item di dalam keranjang belanja.
// Biasanya merupakan gabungan dari tipe Product dengan properti 'quantity'.
export interface CartItem extends Product {
  quantity: number;
}
