import { User } from "@/types/user.types";
import apiClient from "../api/apiClient";
import { ApiResponse } from "../types/api.types";

export interface UpdateProfilePayload {
  name?: string;
  phone?: string;
  email?: string;
  password?: string; // Hanya diisi jika ingin mengubah password
}

export const getProfile = async (): Promise<User> => {
  const response = await apiClient.get<ApiResponse<User>>("/profiles");
  return response.data.data;
};

export const updateProfile = async (
  payload: UpdateProfilePayload
): Promise<User> => {
  const response = await apiClient.patch("/profiles/update", payload);
  return response.data.data;
};
