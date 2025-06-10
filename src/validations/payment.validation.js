import Joi from "joi";

export const createPaymentSchema = Joi.object({
  order_id: Joi.number().integer().required().messages({
    "number.base": "order ID harus berupa angka.",
    "number.integer": "order ID harus berupa bilangan bulat.",
    "any.required": "order ID wajib diisi.",
  }),
  bank: Joi.string().valid("bca", "bni", "bri", "bsi").required().messages({
    "string.base": "Bank harus berupa teks.",
    "any.only": "Bank hanya bisa salah satu dari: bca, bni, bri.",
    "any.required": "Bank wajib diisi.",
  }),
});

export const cancelPaymentSchema = Joi.object({
  transactionId: Joi.string().min(3).required().messages({
    "string.base": "Transaction ID harus berupa teks.",
    "any.required": "Transaction ID wajib diisi.",
    "string.min": "Transaction ID minimal 3.",
  }),
});

export const checkPaymentStatusSchema = Joi.object({
  transactionId: Joi.string().min(3).required().messages({
    "string.base": "Transaction ID harus berupa teks.",
    "any.required": "Transaction ID wajib diisi.",
    "string.min": "Transaction ID minimal 3.",
  }),
});

export const createGoPayPaymentSchema = Joi.object({
  order_id: Joi.number().integer().required().messages({
    "number.base": "Order ID harus berupa angka.",
    "number.integer": "Order ID harus berupa bilangan bulat.",
    "any.required": "Order ID wajib diisi.",
  }),
});
