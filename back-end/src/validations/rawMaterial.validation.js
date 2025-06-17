// src/api/raw-materials/rawMaterial.validation.js

import Joi from "joi";

export const createRawMaterialSchema = Joi.object({
  stock: Joi.number().min(0).required(),
  barcode: Joi.string().trim().min(1).required(),
  reorder_level: Joi.number().min(0).default(0),
});
export const updateRawMaterialSchema = Joi.object({
  name: Joi.string().trim().min(3).optional(),
  unit: Joi.string().trim().optional(),
  stock: Joi.number().min(0).optional(),
  reorder_level: Joi.number().min(0).optional(),
});

// Skema khusus untuk menyesuaikan stok
export const adjustStockSchema = Joi.object({
  adjustment: Joi.number().required().not(0),
  notes: Joi.string().optional().allow("").default("Penyesuaian stok manual"),
});

export const processBarcodeSchema = Joi.object({
  stock: Joi.number().min(0).required(),
  reorder_level: Joi.number().min(0).default(0),
  barcode: Joi.string()
    .required()
    .trim()
    .min(1)
    .messages({ "any.required": "barcode diperlukan." }),
});
