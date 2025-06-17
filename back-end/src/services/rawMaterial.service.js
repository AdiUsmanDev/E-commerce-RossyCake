// src/api/raw-materials/rawMaterial.service.js

import prisma from "../configs/db.js";
import { Error404, Error400 } from "../utils/customError.js";
import { createMaterial, getMaterialByBarcode } from "./materials.service.js";

export const createRawMaterial = async (data) => {
  const material = await prisma.materials.findUnique({
    where: { barcode: data.barcode },
  });

  if (!material) {
    throw new Error400(`Material dengan  '${data.barcode}' tidak ditemukan.`);
  }

  const existingRaw = await prisma.raw_materials.findUnique({
    where: { material_id: material.id },
    include: { material: true },
  });

  if (existingRaw) {
    throw new Error400(
      `Stok untuk material '${existingRaw.material.name}' sudah ada.`
    );
  }

  return prisma.raw_materials.create({
    data: {
      stock: data.stock,
      reorder_level: data.reorder_level ?? 0,
      material: {
        connect: { id: material.id },
      },
    },
  });
};

export const getAllRawMaterials = async () => {
  try {
    const rawMaterials = await prisma.raw_materials.findMany({
      orderBy: {
        material: {
          name: "asc",
        },
      },
      include: { material: true },
    });

    return rawMaterials;
  } catch (error) {
    throw error;
  }
};

export const getRawMaterialById = async (id) => {
  const material = await prisma.raw_materials.findUnique({ where: { id } });
  if (!material) throw new Error404("Bahan baku tidak ditemukan.");
  return material;
};

export const updateRawMaterial = async (id, data) => {
  const existingRaw = await getRawMaterialById(id);

  // Ambil data material terkait
  const material = await prisma.materials.findUnique({
    where: { id: existingRaw.material_id },
  });

  if (!material) {
    throw new Error400(
      `Material dengan ID '${existingRaw.material_id}' tidak ditemukan.`
    );
  }

  const updatedRaw = await prisma.raw_materials.update({
    where: { id },
    data: {
      stock: {
        increment: data.stock,
      },
      reorder_level: data.reorder_level ?? existingRaw.reorder_level,
      updated_at: new Date(),
    },
    include: {
      material: true,
    },
  });

  return updatedRaw;
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

export const processBarcode = async (data) => {
  const material = await prisma.materials.findUnique({
    where: { barcode: data.barcode },
  });

  if (!material) {
   

    throw new Error400(
      `Material dengan barcode '${data.barcode}' tidak ditemukan.`
    );
  }

  const existingRaw = await prisma.raw_materials.findUnique({
    where: { material_id: material.id },
    include: { material: true },
  });

  if (existingRaw) {
    const updatedRaw = await prisma.raw_materials.update({
      where: { material_id: material.id },
      data: {
        stock: {
          increment: existingRaw.material.defaultStock,
        },
        reorder_level: data.reorder_level ?? existingRaw.reorder_level,
        updated_at: new Date(),
      },
      include: {
        material: true,
      },
    });

    return updatedRaw;
  }

  const newRaw = await prisma.raw_materials.create({
    data: {
      stock: material.defaultStock,
      reorder_level: data.reorder_level ?? 0,
      material: {
        connect: { id: material.id },
      },
    },
    include: {
      material: true,
    },
  });

  return newRaw;
};
