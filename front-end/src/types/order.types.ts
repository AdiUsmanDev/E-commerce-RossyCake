import { ShippingAddress } from "./Checkout.type";
import { Payment } from "./payment.types";
import { Product } from "./product.types";
import { User } from "./user.types";

export enum OrderStatus {
  PENDING_PAYMENT = "PENDING_PAYMENT",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export interface Order {
  id: number;
  customerId: number;
  status: OrderStatus;
  order_date: string;
  sub_total: number;
  shipping_cost: number; // ✅ fix type
  discount_amount: number; // ✅ assumed number
  total_price: number;
  shipping_address: ShippingAddress; // ✅ renamed to match Joi
  shipping_method: string;
  tracking_number?: string;
  voucher_id?: number;
  created_at: string;
  updatedAt: string;

  // Relasi (opsional)
  customer?: User;
  order_items?: OrderItem[];
  payment?: Payment;
}
export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: string;
  product?: Product;
}
export interface CreateOrderDTO {
  items: {
    product_id: number;
    quantity: number;
  }[];
  shipping_cost: number;
  shipping_method: string;
  shipping_address: ShippingAddress;
  voucher_id?: number | null;
}

export interface UpdateOrderDTO {
  status?:
    | "PENDING_PAYMENT"
    | "PROCESSING"
    | "SHIPPED"
    | "COMPLETED"
    | "CANCELLED";
  tracking_number?: string | null;
}
