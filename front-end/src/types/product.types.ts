// src/types/index.ts (atau src/types/product.types.ts)

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  category?: string;
  totalAmount: number;
  imageUrl: string;
  created_at: string;
  updated_at: string;
}

export interface CartItem extends Product {
  quantity: number;
}

// Jika Anda membuat file terpisah seperti product.types.ts, maka hanya Product yang ada di sini.
// Lalu di src/types/index.ts Anda bisa re-export: export * from './product.types';
