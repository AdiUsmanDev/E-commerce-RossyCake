// src/api/raw-materials/rawMaterial.service.js

import prisma from "../configs/db.js";
import { Error404, Error400 } from "../utils/customError.js";

export const createRawMaterial = async (data) => {
  const existingMaterial = await prisma.raw_materials.findUnique({
    where: { name: data.name },
  });
  if (existingMaterial) {
    throw new Error400(`Bahan baku dengan nama '${data.name}' sudah ada.`);
  }
  return prisma.raw_materials.create({ data });
};

export const getAllRawMaterials = async () => {
  return prisma.raw_materials.findMany({ orderBy: { name: "asc" } });
};

export const getRawMaterialById = async (id) => {
  const material = await prisma.raw_materials.findUnique({ where: { id } });
  if (!material) throw new Error404("Bahan baku tidak ditemukan.");
  return material;
};

export const updateRawMaterial = async (id, data) => {
  await getRawMaterialById(id); // Memastikan data ada sebelum update
  return prisma.raw_materials.update({
    where: { id },
    data,
  });
};

export const deleteRawMaterial = async (id) => {
  await getRawMaterialById(id); // Memastikan data ada sebelum hapus
  return prisma.raw_materials.delete({ where: { id } });
};

export const adjustStock = async (id, adjustmentData) => {
  const { adjustment } = adjustmentData;
  // Menggunakan `increment` untuk menambah dan `decrement` untuk mengurangi secara atomik
  const operation =
    adjustment > 0
      ? { increment: adjustment }
      : { decrement: Math.abs(adjustment) };

  // Pastikan stok tidak menjadi negatif
  const material = await getRawMaterialById(id);
  if (adjustment < 0 && material.stock < Math.abs(adjustment)) {
    throw new Error400("Penyesuaian gagal, stok tidak boleh negatif.");
  }

  return prisma.raw_materials.update({
    where: { id },
    data: { stock: operation },
  });
};
