import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Nama tidak boleh kosong.",
    "any.required": "Nama diperlukan.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Format email tidak valid.",
    "any.required": "Email diperlukan.",
  }),
  password: Joi.string().min(8).required().messages({
    "string.min": "Password harus memiliki minimal 8 karakter.",
    "any.required": "Password diperlukan.",
  }),
  phone: Joi.string().optional().allow("").pattern(/^\d+$/).messages({
    "string.pattern.base": "Nomor telepon hanya boleh berisi angka.",
  }),
  role: Joi.string().valid("CUSTOMER", "ADMIN").required().messages({
    "any.only": "Peran (role) tidak valid.",
    "any.required": "Peran (role) diperlukan.",
  }),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  phone: Joi.string().optional().allow(""),
  role: Joi.string().valid("CUSTOMER", "ADMIN").required(),
  password: Joi.string().min(8).optional().allow(""), // Opsional, tapi jika ada harus min 8 karakter
});
