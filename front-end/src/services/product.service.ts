import { Product } from "@/types/product.types";
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
  productData: Omit<Product, "id">
): Promise<Product> => {
  const { data } = await apiClient.post<Product>("/products", productData);
  return data;
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
