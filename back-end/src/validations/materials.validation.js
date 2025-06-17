import Joi from "joi";

const validUnits = ["gram", "kilogram", "pcs", "liter", "mililiter"];

export const createMaterialSchema = Joi.object({
  name: Joi.string().trim().min(3).required(),
  defaultStock: Joi.number().min(0).required(),
  unit: Joi.string()
    .trim()
    .valid(...validUnits)
    .required()
    .allow(""), // izinkan kosong untuk awal
  barcode: Joi.string().trim().min(1).required(),
});

export const updateMaterialSchema = Joi.object({
  name: Joi.string().trim().min(3),
  defaultStock: Joi.number().min(0),
  unit: Joi.string()
    .trim()
    .valid(...validUnits),
  barcode: Joi.string().trim().min(1),
}).min(1); // minimal ada satu field yang diupdate
