// src/types/auth.types.ts

import { User } from "./user.types";

// Data yang dibutuhkan untuk endpoint registrasi
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

// Data yang dibutuhkan untuk endpoint login
export interface LoginPayload {
  email: string;
  password: string;
}

// Respons yang diharapkan setelah login berhasil
export interface AuthResponse {
  token: string;
  user: User;
}
