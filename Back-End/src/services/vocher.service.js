// src/api/vouchers/voucher.service.js

import prisma from "../configs/db.js";
import { Error404 } from "../utils/customError.js";

// === ADMIN SERVICES ===

export const createVoucher = async (voucherData) => {
  const existingVoucher = await prisma.vouchers.findUnique({
    where: { code: voucherData.code },
  });
  if (existingVoucher) {
    throw new Error404(`Voucher dengan kode '${voucherData.code}' sudah ada.`);
  }
  return await prisma.vouchers.create({ data: voucherData });
};

export const getAllVouchers = async () => {
  return await prisma.vouchers.findMany({ orderBy: { created_at: "desc" } });
};

export const getVoucherById = async (id) => {
  const voucher = await prisma.vouchers.findUnique({ where: { id } });
  if (!voucher) throw new Error404("Voucher tidak ditemukan.");
  return voucher;
};

export const updateVoucherById = async (id, voucherData) => {
  await getVoucherById(id); // Cek apakah voucher ada
  return await prisma.vouchers.update({ where: { id }, data: voucherData });
};

export const deleteVoucherById = async (id) => {
  await getVoucherById(id); // Cek apakah voucher ada
  return await prisma.vouchers.delete({ where: { id } });
};


export const applyVoucher = async (code, purchaseAmount) => {
  const voucher = await prisma.vouchers.findUnique({ where: { code } });

  // 1. Validasi dasar
  if (!voucher) throw new Error404("Kode voucher tidak ditemukan.");
  if (voucher.current_usage >= voucher.usage_limit)
    throw new ErrorBadRequest("Kuota pemakaian voucher sudah habis.");
  if (new Date() > new Date(voucher.valid_until))
    throw new ErrorBadRequest("Voucher sudah tidak berlaku.");
  if (purchaseAmount < voucher.min_purchase)
    throw new ErrorBadRequest(
      `Minimum pembelian untuk voucher ini adalah Rp ${voucher.min_purchase}.`
    );

  // 2. Kalkulasi diskon
  let discountAmount = 0;
  if (voucher.discount_type === "FIXED") {
    discountAmount = Number(voucher.discount_value);
  } else if (voucher.discount_type === "PERCENTAGE") {
    const calculatedDiscount =
      (Number(voucher.discount_value) / 100) * purchaseAmount;
    discountAmount = voucher.max_discount
      ? Math.min(calculatedDiscount, Number(voucher.max_discount))
      : calculatedDiscount;
  }

  // Pastikan diskon tidak lebih besar dari total belanja
  discountAmount = Math.min(discountAmount, purchaseAmount);

  return {
    message: "Voucher berhasil digunakan",
    voucher_id: voucher.id,
    code: voucher.code,
    discount_amount: Math.round(discountAmount), // Bulatkan untuk menghindari desimal aneh
  };
};
