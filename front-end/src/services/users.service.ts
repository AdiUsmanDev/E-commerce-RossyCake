// src/services/user.service.ts

import { ApiResponse } from "@/types/api.types";
import { User, CreateUserPayload, UpdateUserPayload } from "@/types/user.types";
import apiClient from "../api/apiClient"; // Asumsi apiClient sudah dikonfigurasi

export const getAllUsers = async (): Promise<User[]> => {
  // Respons dari API mungkin berbentuk { status, data }, jadi kita ambil `data.data`
  const response = await apiClient.get<ApiResponse<User[]>>("/users");
  return response.data.data;
};

export const createUser = async (payload: CreateUserPayload): Promise<User> => {
  const response = await apiClient.post<ApiResponse<User>>("/users", payload);
  return response.data.data;
};

export const updateUser = async (
  userId: number,
  payload: UpdateUserPayload
): Promise<User> => {
  const response = await apiClient.patch<ApiResponse<User>>(
    `/users/${userId}`,
    payload
  );
  return response.data.data;
};

export const deleteUser = async (userId: number): Promise<void> => {
  // Respons DELETE biasanya tidak memiliki body, jadi kita tidak perlu `return`
  await apiClient.delete(`/users/${userId}`);
};
