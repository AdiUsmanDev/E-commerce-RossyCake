import Joi from "joi";

export const createProduct = Joi.object({
  name: Joi.string().max(100).required().messages({
    "string.base": "Nama harus berupa teks",
    "string.max": "Nama maksimal 100 karakter",
    "any.required": "Nama produk wajib diisi",
  }),
  description: Joi.string().allow(null, "").messages({
    "string.base": "Deskripsi harus berupa teks",
  }),
  price: Joi.number().precision(2).min(0).required().messages({
    "number.base": "Harga harus berupa angka",
    "number.min": "Harga tidak boleh negatif",
    "any.required": "Harga wajib diisi",
  }),
  stock: Joi.number().integer().min(0).required().messages({
    "number.base": "Stok harus berupa angka bulat",
    "number.min": "Stok tidak boleh negatif",
    "any.required": "Stok wajib diisi",
  }),
  category: Joi.string().max(100).allow(null, "").messages({
    "string.base": "Kategori harus berupa teks",
    "string.max": "Kategori maksimal 100 karakter",
  }),
  image_url: Joi.string().max(100).allow(null, "").messages({
    "string.base": "link gambar harus berupa teks",
    "string.max": "link gambar maksimal 100 karakter",
  }),
});

export const updateProduct = Joi.object({
  name: Joi.string().max(100).optional().messages({
    "string.base": "Nama harus berupa teks",
    "string.max": "Nama maksimal 100 karakter",
  }),
  description: Joi.string().allow(null, "").optional().messages({
    "string.base": "Deskripsi harus berupa teks",
  }),
  price: Joi.number().precision(2).min(0).optional().messages({
    "number.base": "Harga harus berupa angka",
    "number.min": "Harga tidak boleh negatif",
  }),
  stock: Joi.number().integer().min(0).optional().messages({
    "number.base": "Stok harus berupa angka bulat",
    "number.min": "Stok tidak boleh negatif",
  }),
  category: Joi.string().max(100).allow(null, "").optional().messages({
    "string.base": "Kategori harus berupa teks",
    "string.max": "Kategori maksimal 100 karakter",
  }),
  image_url: Joi.string().max(100).allow(null, "").messages({
    "string.base": "link gambar harus berupa teks",
    "string.max": "link gambar maksimal 100 karakter",
  }),
});
