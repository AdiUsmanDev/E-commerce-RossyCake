// src/services/paymentService.ts

import { CreatePaymentPayload, Payment } from "@/types/payment.types";
import apiClient from "../api/apiClient";
import { ApiResponse } from "@/types/api.types";



export const createVirtualAccountPayment = async (
  payload: CreatePaymentPayload
): Promise<Payment> => {
  const response = await apiClient.post<ApiResponse<Payment>>(
    "/payments/virtual-account",
    payload
  );
  return response.data.data;
};

export const createGoPayPayment = async (
  payload: CreatePaymentPayload
): Promise<Payment> => {
  const { data } = await apiClient.post<Payment>("/payments/gopay", payload);
  return data;
};

export const checkPaymentStatus = async (
  transactionId: string
): Promise<Payment> => {
  if (!transactionId) {
    throw new Error("Transaction ID is required to check payment status.");
  }

  const response = await apiClient.get<ApiResponse<Payment>>(
    `/payments/${transactionId}`
  );

  return response.data.data;
};
export const cancelPayment = async (
  transactionId: string
): Promise<{ message: string }> => {
  if (!transactionId) {
    throw new Error("Transaction ID is required to cancel a payment.");
  }
  const { data } = await apiClient.delete<{ message: string }>(
    `/payments/${transactionId}`
  );
  return data;
};
