import Joi from "joi";

// Skema untuk memperbarui pengaturan. Semua field opsional.
export const updateSettingsSchema = Joi.object({
  siteName: Joi.string().max(100).optional().messages({
    "string.max": "Nama Toko tidak boleh lebih dari 100 karakter.",
  }),
  siteTagline: Joi.string().max(255).optional().messages({
    "string.max": "Tagline Toko tidak boleh lebih dari 255 karakter.",
  }),
  maintenanceMode: Joi.boolean().optional().messages({
    "boolean.base": "Mode Maintenance harus berupa nilai boolean (true/false).",
  }),
});
