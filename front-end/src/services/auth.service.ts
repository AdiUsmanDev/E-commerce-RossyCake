// src/services/authService.ts

import { User } from "@/types/user.types";
import apiClient from "../api/apiClient";
import { ApiResponse } from "../types/api.types";
import {
  RegisterPayload,
  LoginPayload,
  AuthResponse,
} from "../types/auth.types";

export const register = async (payload: RegisterPayload): Promise<User> => {
  const response = await apiClient.post<ApiResponse<User>>(
    "/auth/register",
    payload
  );
  return response.data.data;
};

export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const response = await apiClient.post<ApiResponse<AuthResponse>>(
    "/auth/login",
    payload
  );
  // Di sini Anda bisa langsung menyimpan token ke localStorage jika diperlukan
  if (response.data.data.token) {
    localStorage.setItem("authToken", response.data.data.token);
  }
  return response.data.data;
};
