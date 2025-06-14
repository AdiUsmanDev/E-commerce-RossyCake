import Joi from "joi";

export const update = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Nama harus berupa teks.",
    "string.empty": "Nama tidak boleh kosong.",
    "any.required": "Nama diperlukan.",
  }),
  phone: Joi.string().pattern(/^\d+$/).min(10).max(15).required().messages({
    "string.base": "Nomor telepon harus berupa teks.",
    "string.empty": "Nomor telepon tidak boleh kosong.",
    "string.pattern.base": "Nomor telepon hanya boleh berisi angka.",
    "string.min": "Nomor telepon harus terdiri dari minimal 10 digit.",
    "string.max": "Nomor telepon harus terdiri dari maksimal 15 digit.",
    "any.required": "Nomor telepon diperlukan.",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email harus berupa teks.",
    "string.empty": "Email tidak boleh kosong.",
    "string.email": "Email harus berupa alamat email yang valid.",
    "any.required": "Email diperlukan.",
  }),
  password: Joi.string()
    // 1. Mengizinkan string kosong. Ini penting agar jika frontend
    //    mengirim password: "", Joi akan menganggapnya sebagai "tidak diisi"
    //    dan tidak akan memvalidasi panjang minimalnya.
    .allow("")
    // 2. Menandai field ini sebagai opsional. Jika properti password
    //    tidak ada sama sekali di payload, validasi akan dilewati.
    .optional()
    // 3. Validasi panjang minimal HANYA berlaku jika string tidak kosong.
    .min(8)
    .messages({
      "string.base": "Password harus berupa teks.",
      // 4. Pesan error disesuaikan dengan aturan min(8).
      "string.min": "Password harus terdiri dari minimal 8 karakter.",
    }),
});
