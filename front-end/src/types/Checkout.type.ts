export interface ShippingAddress {
  recipient: string;
  phone: string;
  street: string;
  city: string;
  province: string;
  postal_code: string;
}

export interface CreateOrderDTO {
  items: Array<{ product_id: number; quantity: number }>;
  shipping_address: ShippingAddress;
  shipping_method: string;
  voucherCode?: string;
  // payment_method: string;
  shipping_cost: number;
  voucher_id?: number | null;
}
