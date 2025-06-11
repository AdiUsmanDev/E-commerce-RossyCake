// src/api/vouchers/voucher.validation.js

import Joi from "joi";

// Skema untuk membuat voucher baru
export const createVoucherSchema = Joi.object({
  code: Joi.string().trim().uppercase().min(3).max(50).required(),
  description: Joi.string().optional().allow(""),
  discount_type: Joi.string()
    .valid("PERCENTAGE", "FIXED", "FREE_SHIPING")
    .required(),
  discount_value: Joi.number().positive().required(),
  max_discount: Joi.number()
    .positive()
    .when("discount_type", {
      is: "PERCENTAGE",
      then: Joi.required(),
      otherwise: Joi.optional().allow(null),
    }),
  min_purchase: Joi.number().min(0).default(0),
  valid_until: Joi.date().iso().required(),
  usage_limit: Joi.number().integer().positive().required(),
});

// Skema untuk mengupdate voucher (semua opsional)
export const updateVoucherSchema = Joi.object({
  description: Joi.string().optional().allow(""),
  valid_until: Joi.date().iso().optional(),
  usage_limit: Joi.number().integer().positive().optional(),
});

// Skema untuk user saat akan memakai voucher
export const applyVoucherSchema = Joi.object({
  code: Joi.string().trim().uppercase().required(),
  purchase_amount: Joi.number().positive().required(),
});
