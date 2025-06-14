// src/services/voucherService.ts

import apiClient from "@/api/apiClient";
import { ApiResponse } from "@/types/api.types";
import {
  Voucher,
  CreateVoucherDTO,
  UpdateVoucherDTO,
  ApplyVoucherPayload,
  ApplyVoucherResponse,
} from "@/types/vocher.types";

export const getAllVouchers = async (): Promise<Voucher[]> => {
  const response = await apiClient.get<ApiResponse<Voucher[]>>("/vochers");
  return response.data.data;
};
export const getVoucherById = async (voucherId: number): Promise<Voucher> => {
  const response = await apiClient.get<ApiResponse<Voucher>>(
    `/vochers/${voucherId}`
  );
  return response.data.data;
};

export const applyVoucher = async (
  payload: ApplyVoucherPayload
): Promise<ApplyVoucherResponse> => {
  const response = await apiClient.post<ApplyVoucherResponse>(
    "/vouchers/apply",
    payload
  );
  return response.data.response;
};

export const createVoucher = async (
  voucherData: CreateVoucherDTO
): Promise<Voucher> => {
  const { data } = await apiClient.post<Voucher>("/vochers", voucherData);
  return data;
};

export const updateVoucher = async (
  voucherId: number,
  voucherData: UpdateVoucherDTO
): Promise<Voucher> => {
  const response = await apiClient.patch<Voucher>(
    `/vochers/${voucherId}`,
    voucherData
  );
  return response.data.data;
};

export const deleteVoucher = async (
  voucherId: number
): Promise<{ message: string }> => {
  const v = await apiClient.delete<{ message: string }>(
    `/vochers/${voucherId}`
  );
  return response.data.data;
};
