import Joi from "joi";

export const createOrder = Joi.object({
  // TAMBAHKAN VALIDASI UNTUK ITEMS
  items: Joi.array()
    .items(
      Joi.object({
        product_id: Joi.number().integer().positive().required(),
        quantity: Joi.number().integer().positive().required(),
      })
    )
    .min(1)
    .required(), // Minimal harus ada 1 item

  // Field lain tetap sama
  shipping_cost: Joi.number().positive().required(),
  shipping_method: Joi.string().required(),
  shipping_address: Joi.object({
    recipient: Joi.string().required(),
    phone: Joi.string().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    province: Joi.string().required(),
    postal_code: Joi.string().required(),
  }).required(),
  voucher_id: Joi.number().integer().optional().allow(null),
});

export const updateOrder = Joi.object({
  status: Joi.string().valid("PROCESSING", "SHIPPED", "COMPLETED", "CANCELLED"),
  tracking_number: Joi.string().allow(null, ""),
});
