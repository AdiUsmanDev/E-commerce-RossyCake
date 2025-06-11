// src/types/user.types.ts

// Enum untuk peran (Role), sesuai dengan skema Prisma Anda
export enum Role {
  CUSTOMER = "CUSTOMER",
  ADMIN = "ADMIN",
}

// Interface utama untuk objek Pengguna.
// Ini merepresentasikan data pengguna yang aman untuk digunakan di frontend.
// Perhatikan bahwa 'password' sengaja tidak disertakan.
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string | null; // Menggunakan null jika bisa kosong
  role: Role;
  created_at: string; // Tipe ISO date string
  updated_at: string; // Tipe ISO date string
}

// Tipe data untuk payload saat MEMBUAT pengguna baru.
// Sesuai dengan skema validasi Joi untuk `createUser`.
export interface CreateUserPayload {
  name: string;
  email: string;
  password: string; // Wajib diisi saat membuat user baru
  phone?: string;
  role: Role;
}

// Tipe data untuk payload saat MEMPERBARUI pengguna.
// Semua field bersifat opsional, dan hanya yang bisa diubah yang disertakan.
// Sesuai dengan skema validasi Joi untuk `updateUser`.
export interface UpdateUserPayload {
  name?: string;
  phone?: string;
  role?: Role;
  password?: string; // Opsional: hanya diisi jika ingin mengganti password
}
