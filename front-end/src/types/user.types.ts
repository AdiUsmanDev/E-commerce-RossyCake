export enum Role {
  CUSTOMER = "CUSTOMER",
  ADMIN = "ADMIN",
}

// --- Model Inti ---
export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: Role;
  password: string;
  createdAt: string;
  updatedAt: string;
}
