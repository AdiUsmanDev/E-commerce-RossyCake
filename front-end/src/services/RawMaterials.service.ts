// src/services/rawMaterial.service.tsimport apiClient from "../api/apiClient";
import apiClient from "../api/apiClient";
import { ApiResponse } from "@/types/api.types";
import {
  AdjustStockPayload,
  CreateRawMaterialPayload,
  RawMaterial,
  UpdateRawMaterialPayload,
} from "@/types/RawMaterials";

const prefix = "/raw-materials";

export const getAllRawMaterials = async (): Promise<RawMaterial[]> => {
  const response = await apiClient.get<ApiResponse<RawMaterial[]>>(prefix);
  return response.data.data;
};

/**
 * Mengambil detail satu bahan baku berdasarkan ID.
 */
export const getRawMaterialById = async (id: number): Promise<RawMaterial> => {
  const response = await apiClient.get<ApiResponse<RawMaterial>>(
    `${prefix}/${id}`
  );
  return response.data.data;
};

/**
 * Membuat bahan baku baru.
 */
export const createRawMaterial = async (
  payload: CreateRawMaterialPayload
): Promise<RawMaterial> => {
  const response = await apiClient.post<ApiResponse<RawMaterial>>(
    prefix,
    payload
  );
  return response.data.data;
};

/**
 * Memperbarui data bahan baku berdasarkan ID.
 */
export const updateRawMaterial = async (
  id: number,
  payload: UpdateRawMaterialPayload
): Promise<RawMaterial> => {
  const response = await apiClient.patch<ApiResponse<RawMaterial>>(
    `${prefix}/${id}`,
    payload
  );
  return response.data.data;
};

/**
 * Menghapus bahan baku berdasarkan ID.
 */
export const deleteRawMaterial = async (id: number): Promise<void> => {
  await apiClient.delete(`${prefix}/${id}`);
};

/**
 * Menyesuaikan stok bahan baku (menambah atau mengurangi).
 */
export const adjustStock = async (
  id: number,
  payload: AdjustStockPayload
): Promise<RawMaterial> => {
  const response = await apiClient.patch<ApiResponse<RawMaterial>>(
    `${prefix}/${id}/adjust-stock`,
    payload
  );
  return response.data.data;
};
