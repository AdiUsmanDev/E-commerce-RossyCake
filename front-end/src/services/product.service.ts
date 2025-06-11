import { CreateProductPayload, Product } from "@/types/product.types";
import apiClient from "../api/apiClient";
import { ApiResponse } from "@/types/api.types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await apiClient.get<ApiResponse<Product[]>>("/products");
  return response.data.data;
};

export const getProductById = async (productId: number): Promise<Product> => {
  if (!productId) {
    throw new Error("Product ID is required to fetch a product.");
  }
  const { data } = await apiClient.get<Product>(`/products/${productId}`);
  return data;
};

export const createProduct = async (
  productData: Omit<CreateProductPayload, "id">
): Promise<Product> => {
  const response = await apiClient.post<ApiResponse<Product>>(
    "/products",
    productData
  );
  return response.data.data;
};

export const updateProduct = async (
  productId: number,
  productData: Partial<Product>
): Promise<Product> => {
  const { data } = await apiClient.put<Product>(
    `/products/${productId}`,
    productData
  );
  return data;
};

export const deleteProduct = async (productId: number): Promise<void> => {
  if (!productId) {
    throw new Error("Product ID is required to delete a product.");
  }
  // Tidak perlu mengambil 'data' karena respons DELETE biasanya kosong
  const response = await apiClient.delete(`/products/${productId}`);

  return response.data.data;
};
