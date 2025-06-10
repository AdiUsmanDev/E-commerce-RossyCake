// src/types/api.types.ts

// --- ENUMS ---

export interface ApiResponse<T> {
  transaction_status: string;
  status: {
    code: number;
    message: string;
  };
  data: T;
}




// --- Model Pendukung ---



// --- DTO (Data Transfer Object) untuk Operasi Create/Update ---
// Contoh untuk membuat pesanan baru

