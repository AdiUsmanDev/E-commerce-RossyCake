import * as ShippingMethodService from "../services/shipping.service.js";
import * as ShippingMethodValidation from "../validations/shipping.validation.js";
import { res200, res201 } from "../utils/response.js";
import { Error400 } from "../utils/customError.js";


export const getAllShippingMethods = async (req, res, next) => {
  try {
    const shippingMethods = await ShippingMethodService.getAllShippingMethods();
    res200(
      "Berhasil mendapatkan semua data metode pengiriman",
      shippingMethods,
      res
    );
  } catch (error) {
    next(error);
  }
};


export const createShippingMethod = async (req, res, next) => {
  try {
    const { error, value } =
      ShippingMethodValidation.createShippingMethodSchema.validate(req.body);
    if (error) throw new Error400(error.details[0].message);

    const newShippingMethod = await ShippingMethodService.createShippingMethod(
      value
    );
    res201("Metode pengiriman baru berhasil dibuat", newShippingMethod, res);
  } catch (error) {
    next(error);
  }
};


export const updateShippingMethod = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { error, value } =
      ShippingMethodValidation.updateShippingMethodSchema.validate(req.body);
    if (error) throw new Error400(error.details[0].message);

    const updatedShippingMethod =
      await ShippingMethodService.updateShippingMethod(id, value);
    res200("Metode pengiriman berhasil diperbarui", updatedShippingMethod, res);
  } catch (error) {
    next(error);
  }
};


export const deleteShippingMethod = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ShippingMethodService.deleteShippingMethod(id);
    res200("Metode pengiriman berhasil dihapus", result, res);
  } catch (error) {
    next(error);
  }
};
