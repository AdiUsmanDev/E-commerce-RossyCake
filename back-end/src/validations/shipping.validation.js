import Joi from "joi";


export const createShippingMethodSchema = Joi.object({
  name: Joi.string().max(100).required().messages({
    "string.empty": "Nama metode pengiriman tidak boleh kosong.",
    "string.max": "Nama metode pengiriman tidak boleh lebih dari 100 karakter.",
    "any.required": "Nama metode pengiriman diperlukan.",
  }),
  cost: Joi.number().precision(2).required().messages({
    "number.base": "Biaya harus berupa angka.",
    "number.precision":
      "Biaya hanya boleh memiliki maksimal dua angka desimal.",
    "any.required": "Biaya diperlukan.",
  }),
  estimated_delivery_time: Joi.string().max(50).optional().allow("").messages({
    "string.max":
      "Estimasi waktu pengiriman tidak boleh lebih dari 50 karakter.",
  }),
});


export const updateShippingMethodSchema = Joi.object({
  name: Joi.string().max(100).optional().messages({
    "string.empty": "Nama metode pengiriman tidak boleh kosong.",
    "string.max": "Nama metode pengiriman tidak boleh lebih dari 100 karakter.",
  }),
  cost: Joi.number().precision(2).optional().messages({
    "number.base": "Biaya harus berupa angka.",
    "number.precision":
      "Biaya hanya boleh memiliki maksimal dua angka desimal.",
  }),
  estimated_delivery_time: Joi.string().max(50).optional().allow("").messages({
    "string.max":
      "Estimasi waktu pengiriman tidak boleh lebih dari 50 karakter.",
  }),
});
