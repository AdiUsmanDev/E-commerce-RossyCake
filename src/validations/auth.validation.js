import Joi from "joi";

export const login = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email harus berupa teks.",
    "string.empty": "Email tidak boleh kosong.",
    "string.email": "Email harus berupa alamat email yang valid.",
    "any.required": "Email diperlukan.",
  }),
  password: Joi.string().min(8).max(20).required().messages({
    "string.base": "Password harus berupa teks.",
    "string.empty": "Password tidak boleh kosong.",
    "string.min": "Password harus terdiri dari minimal 8 karakter.",
    "string.max": "Password harus terdiri dari maksimal 20 karakter.",
    "any.required": "Password diperlukan.",
  }),
});

export const register = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Nama harus berupa teks.",
    "string.empty": "Nama tidak boleh kosong.",
    "any.required": "Nama diperlukan.",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email harus berupa teks.",
    "string.empty": "Email tidak boleh kosong.",
    "string.email": "Email harus berupa alamat email yang valid.",
    "any.required": "Email diperlukan.",
  }),
  password: Joi.string().min(8).required().messages({
    "string.base": "Password harus berupa teks.",
    "string.empty": "Password tidak boleh kosong.",
    "string.min": "Password harus terdiri dari minimal 10 karakter.",
    "any.required": "Password diperlukan.",
  }),
});
