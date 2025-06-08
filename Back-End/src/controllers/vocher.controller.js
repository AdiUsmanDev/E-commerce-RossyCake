// src/api/vouchers/voucher.controller.js

import * as voucherService from "../services/vocher.service.js";
import { Error400 } from "../utils/customError.js";
import { res200, res201 } from "../utils/response.js"; // Asumsi path response util

// Impor semua skema validasi yang diperlukan dari Joi
import {
  createVoucherSchema,
  updateVoucherSchema,
  applyVoucherSchema,
} from "../validations/vocher.validation.js"; // Sesuaikan path jika perlu

export const createVoucher = async (req, res, next) => {
  try {
    // 1. Lakukan validasi di dalam controller
    const { error, value } = createVoucherSchema.validate(req.body);
    if (error) {
      // 2. Jika validasi gagal, lempar error
      throw new Error400(error.details[0].message);
    }

    // 3. Gunakan 'value' (data yang sudah divalidasi) untuk memanggil service
    const newVoucher = await voucherService.createVoucher(value);
    res201("Voucher berhasil dibuat", newVoucher, res);
  } catch (error) {
    next(error);
  }
};

export const getAllVouchers = async (req, res, next) => {
  try {
    // Tidak ada body yang perlu divalidasi untuk GET all
    const vouchers = await voucherService.getAllVouchers();
    res200("Berhasil mendapatkan semua voucher", vouchers, res);
  } catch (error) {
    next(error);
  }
};

export const getVoucherById = async (req, res, next) => {
  try {
    // Tidak ada body yang perlu divalidasi untuk GET by ID
    const voucher = await voucherService.getVoucherById(
      parseInt(req.params.id)
    );
    res200("Berhasil mendapatkan detail voucher", voucher, res);
  } catch (error) {
    next(error);
  }
};

export const updateVoucher = async (req, res, next) => {
  try {
    // 1. Lakukan validasi di dalam controller
    const { error, value } = updateVoucherSchema.validate(req.body);
    if (error) {
      // 2. Jika validasi gagal, lempar error
      throw new Error400(error.details[0].message);
    }

    // 3. Gunakan 'value' untuk memanggil service
    const updatedVoucher = await voucherService.updateVoucherById(
      parseInt(req.params.id),
      value
    );
    res200("Voucher berhasil diperbarui", updatedVoucher, res);
  } catch (error) {
    next(error);
  }
};

export const deleteVoucher = async (req, res, next) => {
  try {
    // Tidak ada body yang perlu divalidasi untuk DELETE
    await voucherService.deleteVoucherById(parseInt(req.params.id));
    // Memperbaiki response agar konsisten (data bisa null)
    res200("Voucher berhasil dihapus", null, res);
  } catch (error) {
    next(error);
  }
};

export const applyVoucher = async (req, res, next) => {
  try {
    // 1. Lakukan validasi di dalam controller
    const { error, value } = applyVoucherSchema.validate(req.body);
    if (error) {
      // 2. Jika validasi gagal, lempar error
      throw new Error400(error.details[0].message);
    }

    // 3. Gunakan 'value' untuk memanggil service
    const result = await voucherService.applyVoucher(
      value.code,
      value.purchase_amount
    );

    // Memperbaiki response agar konsisten
    res200(result.message, result, res);
  } catch (error) {
    next(error);
  }
};
