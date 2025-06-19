export interface ShippingMethod {
  id: number;
  name: string;
  cost: number; // Prisma Decimal akan menjadi number di JSON/JavaScript
  estimated_delivery_time: string | null;
  created_at: string; // Tipe Date biasanya dikirim sebagai string ISO 8601
  updated_at: string;
}

export type CreateShippingMethodPayload = {
  name: string;
  cost: number;
  estimated_delivery_time?: string; // Opsional saat pembuatan
};
export type UpdateShippingMethodPayload = Partial<CreateShippingMethodPayload>;
