import {
  createMaterialSchema,
  updateMaterialSchema,
} from "../validations/materials.validation.js";
import * as materialService from "../services/materials.service.js";
import { res200, res201 } from "../utils/response.js";
import { Error400 } from "../utils/customError.js";

export const createMaterial = async (req, res, next) => {
  try {
    const { error, value } = createMaterialSchema.validate(req.body);
    if (error) {
      throw new Error400(error.details[0].message);
    }
    const result = await materialService.createMaterial(value);
    res201("Material berhasil ditambahkan", result, res);
  } catch (error) {
    next(error);
  }
};

export const getAllMaterials = async (req, res, next) => {
  try {
    const result = await materialService.getAllMaterials();
    res200("Berhasil mendapatkan semua material", result, res);
  } catch (error) {
    next(error);
  }
};

export const getMaterialByBarcode = async (req, res, next) => {
  try {
    const { barcode } = req.params;

    const result = await materialService.getMaterialByBarcode(barcode);
    res200("Berhasil mendapatkan detail material", result, res);
  } catch (error) {
    next(error);
  }
};

export const updateMaterial = async (req, res, next) => {
  try {
    const { barcode } = req.params;

    const { error, value } = updateMaterialSchema.validate(req.body);
    if (error) {
      throw new Error400(error.details[0].message);
    }

    const result = await materialService.updateMaterial(barcode, value);
    res200("Material berhasil diperbarui", result, res);
  } catch (error) {
    next(error);
  }
};

export const deleteMaterial = async (req, res, next) => {
  try {
    const { barcode } = req.params;
    const result = await materialService.deleteMaterial(barcode);
    res200("Material berhasil dihapus", result, res);
  } catch (error) {
    next(error);
  }
};
