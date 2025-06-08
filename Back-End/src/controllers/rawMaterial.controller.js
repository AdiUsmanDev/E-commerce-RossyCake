// src/api/raw-materials/rawMaterial.controller.js

import { res200, res201 } from "../utils/response.js";
import * as rawMaterialService from "../services/rawMaterial.service.js";
import { Error400 } from "../utils/customError.js";
import {
  createRawMaterialSchema,
  updateRawMaterialSchema,
  adjustStockSchema,
} from "../validations/rawMaterial.validation.js";
export const createRawMaterial = async (req, res, next) => {
  try {
    // Memperbaiki validasi: gunakan skema yang benar
    const { error, value } = createRawMaterialSchema.validate(req.body);
    if (error) {
      // Gunakan error.details[0].message untuk pesan yang lebih bersih
      throw new Error400(error.details[0].message);
    }

    const result = await rawMaterialService.createRawMaterial(value);
    res201("Bahan baku berhasil ditambahkan", result, res);
  } catch (error) {
    next(error);
  }
};

export const getAllRawMaterials = async (req, res, next) => {
  try {
    // Fungsi ini tidak memerlukan validasi body
    const result = await rawMaterialService.getAllRawMaterials();
    res200("Berhasil mendapatkan semua bahan baku", result, res);
  } catch (error) {
    next(error);
  }
};

export const getRawMaterialById = async (req, res, next) => {
  try {
    // Fungsi ini tidak memerlukan validasi body
    const result = await rawMaterialService.getRawMaterialById(
      parseInt(req.params.id)
    );
    res200("Berhasil mendapatkan detail bahan baku", result, res);
  } catch (error) {
    next(error);
  }
};

export const updateRawMaterial = async (req, res, next) => {
  try {
    // Memperbaiki validasi: Pindahkan dari middleware ke controller
    const { error, value } = updateRawMaterialSchema.validate(req.body);
    if (error) {
      throw new Error400(error.details[0].message);
    }

    const result = await rawMaterialService.updateRawMaterial(
      parseInt(req.params.id),
      value // Gunakan 'value' hasil validasi, bukan req.value
    );
    res200("Bahan baku berhasil diperbarui", result, res);
  } catch (error) {
    next(error);
  }
};

export const deleteRawMaterial = async (req, res, next) => {
  try {
    // Fungsi ini tidak memerlukan validasi body
    await rawMaterialService.deleteRawMaterial(parseInt(req.params.id));
    // Memperbaiki response: kirim 'null' sebagai data
    res200("Bahan baku berhasil dihapus", null, res);
  } catch (error) {
    next(error);
  }
};

export const adjustStock = async (req, res, next) => {
  try {
    // Memperbaiki validasi: Pindahkan dari middleware ke controller
    const { error, value } = adjustStockSchema.validate(req.body);
    if (error) {
      throw new Error400(error.details[0].message);
    }

    const result = await rawMaterialService.adjustStock(
      parseInt(req.params.id),
      value // Gunakan 'value' hasil validasi, bukan req.value
    );
    res200("Stok berhasil disesuaikan", result, res);
  } catch (error) {
    next(error);
  }
};
