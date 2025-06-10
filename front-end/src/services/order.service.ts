// src/services/orderService.ts

import { Order, UpdateOrderDTO } from "@/types/order.types";
import apiClient from "../api/apiClient";
import { CreateOrderDTO } from "@/types/Checkout.type";
import { ApiResponse } from "@/types/api.types";

export const getMyOrders = async (): Promise<Order[]> => {
  const response = await apiClient.get<ApiResponse<Order[]>>("/orders/");
  return response.data.data;
};
/**
 * Membuat pesanan baru.
 */
export const createOrder = async (
  orderData: CreateOrderDTO
): Promise<Order> => {
  const response = await apiClient.post<ApiResponse<Order>>(
    "/orders",
    orderData
  );
  return response.data.data;
};

/**
 * Mengambil detail satu pesanan berdasarkan ID-nya.
 */
export const getOrderById = async (orderId: number): Promise<Order> => {
  if (!orderId) {
    throw new Error("Order ID is required");
  }

  const response = await apiClient.get<ApiResponse<Order>>(
    `/orders/${orderId}`
  );
  return response.data.data;
};

/**
 * Memperbarui status atau data lain dari sebuah pesanan.
 */
export const updateOrder = async (
  orderId: number,
  updateData: UpdateOrderDTO
): Promise<Order> => {
  const response = await apiClient.patch<ApiResponse<Order>>(
    `/orders/${orderId}`,
    updateData
  );
  return response.data.data;
};

/**
 * Menghapus atau membatalkan pesanan.
 */
export const deleteOrder = async (orderId: number): Promise<void> => {
  // Metode delete biasanya tidak mengembalikan konten, jadi kita tidak perlu `data`
  await apiClient.delete(`/orders/${orderId}`);
};
