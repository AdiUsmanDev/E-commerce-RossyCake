// src/services/shipping_method.service.ts

import { ApiResponse } from "@/types/api.types";
import {
  ShippingMethod,
  CreateShippingMethodPayload,
  UpdateShippingMethodPayload,
} from "@/types/shipping.type";
import apiClient from "../api/apiClient";

export const getAllShippingMethods = async (): Promise<ShippingMethod[]> => {
  const response =
    await apiClient.get<ApiResponse<ShippingMethod[]>>("/shipping");
  return response.data.data;
};

export const createShippingMethod = async (
  payload: CreateShippingMethodPayload
): Promise<ShippingMethod> => {
  const response = await apiClient.post<ApiResponse<ShippingMethod>>(
    "/shipping",
    payload
  );
  return response.data.data;
};

export const updateShippingMethod = async (
  methodId: number,
  payload: UpdateShippingMethodPayload
): Promise<ShippingMethod> => {
  const response = await apiClient.patch<ApiResponse<ShippingMethod>>(
    `/shipping/${methodId}`,
    payload
  );
  return response.data.data;
};

export const deleteShippingMethod = async (methodId: number): Promise<void> => {
  await apiClient.delete(`/shipping/${methodId}`);
};
