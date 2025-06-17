export interface Material {
  id: number;
  name: string;
  defaultStock: number;
  unit: string; // Assuming 'unit' is a string or your UnitEnum string representation
  barcode: string;
  created_at: string;
  updated_at: string;
}

// Payload for creating a new material
export interface CreateMaterialPayload {
  name: string;
  unit: string;
  defaultStock: number;
  barcode: string;
}

// Payload for updating an existing material (all fields are optional)
export interface UpdateMaterialPayload {
  name?: string;
  unit?: string;
  barcode?: string;
  defaultStock: number;
}
