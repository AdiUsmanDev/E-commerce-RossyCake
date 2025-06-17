import { ApiResponse } from "./../types/api.types";
import api from "@/api/apiClient";
import {
  CreateMaterialPayload,
  Material,
  UpdateMaterialPayload,
} from "@/types/materiasl";

export const createMaterial = async (
  data: CreateMaterialPayload
): Promise<Material> => {
  const response = await api.post<ApiResponse<Material>>("/materials", data);
  return response.data.data;
};
export const getAllMaterials = async (): Promise<Material[]> => {
  const response = await api.get<ApiResponse<Material[]>>("/materials");
  return response.data.data;
};
export const getMaterialByBarcode = async (
  barcode: string
): Promise<Material> => {
  const response = await api.get<ApiResponse<Material>>(
    `/materials/${barcode}`
  );
  return response.data.data;
};
export const updateMaterial = async (
  barcode: string,
  data: UpdateMaterialPayload
): Promise<Material> => {
  const response = await api.patch<ApiResponse<Material>>(
    `/materials/${barcode}`,
    data
  );
  return response.data.data;
};

export const deleteMaterial = async (barcode: string): Promise<void> => {
  await api.delete(`/materials/${barcode}`);
};
