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

export const getRawMaterialById = async (id: number): Promise<RawMaterial> => {
  const response = await apiClient.get<ApiResponse<RawMaterial>>(
    `${prefix}/${id}`
  );
  return response.data.data;
};

export const createRawMaterial = async (
  payload: CreateRawMaterialPayload
): Promise<RawMaterial> => {
  const response = await apiClient.post<ApiResponse<RawMaterial>>(
    prefix,
    payload
  );
  return response.data.data;
};

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

export const deleteRawMaterial = async (id: number): Promise<void> => {
  await apiClient.delete(`${prefix}/${id}`);
};

export const adjustStock = async (
  payload: UpdateRawMaterialPayload
): Promise<RawMaterial> => {
  const response = await apiClient.patch<ApiResponse<RawMaterial>>(
    `${prefix}/adjust-stock`,
    payload
  );
  return response.data.data;
};

export const processBarcode = async (
  payload: UpdateRawMaterialPayload
): Promise<RawMaterial> => {
  const response = await apiClient.post<ApiResponse<RawMaterial>>(
    prefix + "/process-barcode",
    payload
  );
  return response.data.data;
};
