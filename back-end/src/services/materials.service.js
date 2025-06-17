// src/api/materials/material.service.js

import prisma from "../configs/db.js"; // Import Prisma
import { Error404, Error400 } from "../utils/customError.js"; // Asumsi ini diimpor dari file utilitas Anda

export const createMaterial = async (data) => {
  try {
    const existingByBarcode = await prisma.materials.findUnique({
      where: { barcode: data.barcode },
    });
    if (existingByBarcode) {
      throw new Error400(
        `Material dengan barcode '${data.barcode}' sudah ada.`
      );
    }

    const material = await prisma.materials.create({ data });
    return material;
  } catch (error) {
    throw error;
  }
};

export const getAllMaterials = async () => {
  try {
    return prisma.materials.findMany({
      orderBy: { name: "asc" },
    });
  } catch (error) {
    throw error;
  }
};

export const getMaterialByBarcode = async (barcode) => {
  try {
    const material = await prisma.materials.findUnique({
      where: { barcode: barcode },
    });
    if (!material) {
      throw new Error404("Material tidak ditemukan.");
    }
    return material;
  } catch (error) {
    throw error;
  }
};

export const updateMaterial = async (barcode, data) => {
  try {
    // Cari material berdasarkan barcode
    const materialToUpdate = await prisma.materials.findUnique({
      where: { barcode: barcode },
    });

    if (!materialToUpdate) {
      throw new Error404("Material tidak ditemukan.");
    }

    if (data.name !== undefined && data.name !== materialToUpdate.name) {
      const existingByName = await prisma.materials.findUnique({
        where: { name: data.name },
      });

      if (existingByName && existingByName.id !== materialToUpdate.id) {
        throw new Error400(`Material dengan nama '${data.name}' sudah ada.`);
      }
    }

    if (
      data.barcode !== undefined &&
      data.barcode !== materialToUpdate.barcode
    ) {
      const existingByNewBarcode = await prisma.materials.findUnique({
        where: { barcode: data.barcode },
      });

      if (
        existingByNewBarcode &&
        existingByNewBarcode.id !== materialToUpdate.id
      ) {
        throw new Error400(
          `Material dengan barcode '${data.barcode}' sudah ada.`
        );
      }
    }

    return prisma.materials.update({
      where: { id: materialToUpdate.id },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
  } catch (error) {
    throw error;
  }
};

export const deleteMaterial = async (barcode) => {
  try {
    const materialToDelete = await prisma.materials.findUnique({
      where: { barcode },
    });
    if (!materialToDelete) {
      throw new Error404("Material tidak ditemukan.");
    }

    return prisma.materials.delete({ where: { barcode } });
  } catch (error) {
    throw error;
  }
};
