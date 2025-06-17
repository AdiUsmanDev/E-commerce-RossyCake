export interface Material {
  // Material Master (from materials table)
  id: number;
  name: string;
  unit: string;
  barcode: string;
  created_at: string;
  updated_at: string;
}

export interface RawMaterial {
  // Raw Material Inventory (from raw_materials table)
  id: number;
  material_id: number;
  stock: number;
  barcode: string;
  reorder_level: number;
  created_at: string;
  updated_at: string;
  material: Material; // Includes the related material master data
}

export interface CreateRawMaterialPayload {
  name: string; // Used for manual creation, will create a new Material and RawMaterial
  stock: number;
  unit: string;
  reorder_level?: number;
}

export interface UpdateRawMaterialPayload {
  barcode: string;
  unit?: string;
  stock?: number;
  reorder_level?: number;
}

export interface AdjustStockPayload {
  adjustment: number;
  notes?: string;
}

// Response structure for processScannedBarcode endpoint
export interface ProcessBarcodeResponse {
  action: "created_new_material" | "added_to_inventory" | "stock_updated";
  rawMaterial: RawMaterial;
  amount?: number; // Only present if stock was adjusted
}
