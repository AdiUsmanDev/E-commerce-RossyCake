// src/services/settings.service.ts

import api from "@/api/apiClient";
import { ApiResponse } from "@/types/api.types"; // Sesuaikan path

// Tipe data yang akan digunakan di frontend
export interface GeneralSettingsData {
  siteName: string;
  siteTagline: string;
  maintenanceMode: boolean;
}

// Mengambil pengaturan saat ini
export const getGeneralSettings = async (): Promise<GeneralSettingsData> => {
  const response = await api.get<ApiResponse<GeneralSettingsData>>("/settings");
  return response.data.data;
};

// Memperbarui pengaturan
export const updateGeneralSettings = async (
  payload: Partial<GeneralSettingsData>
): Promise<GeneralSettingsData> => {
  const response = await api.patch<ApiResponse<GeneralSettingsData>>(
    "/settings",
    payload
  );
  return response.data.data;
};
