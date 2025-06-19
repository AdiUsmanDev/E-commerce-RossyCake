import prisma from "../configs/db.js";
import { Error400, Error404, Error409 } from "../utils/customError.js";

export const getAllShippingMethods = async () => {
  const shippingMethods = await prisma.shipping_method.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
  return shippingMethods;
};

export const createShippingMethod = async (methodData) => {
  const { name, cost, estimated_delivery_time } = methodData;

  const existingMethod = await prisma.shipping_method.findUnique({
    where: { name },
  });
  if (existingMethod) {
    throw new Error409(`Metode pengiriman dengan nama '${name}' sudah ada.`);
  }

  const newShippingMethod = await prisma.shipping_method.create({
    data: {
      name,
      cost,
      estimated_delivery_time,
    },
  });

  return newShippingMethod;
};

export const updateShippingMethod = async (methodId, updateData) => {
  const id = parseInt(methodId, 10);
  if (isNaN(id)) {
    throw new Error400("ID harus berupa angka.");
  }

  try {
    const updatedMethod = await prisma.shipping_method.update({
      where: { id },
      data: updateData,
    });
    return updatedMethod;
  } catch (error) {
    if (error.code === "P2025") {
      throw new Error404(`Metode pengiriman dengan ID ${id} tidak ditemukan.`);
    }

    throw error;
  }
};

export const deleteShippingMethod = async (methodId) => {
  const id = parseInt(methodId, 10);
  if (isNaN(id)) {
    throw new Error400("ID harus berupa angka.");
  }

  try {
    return await prisma.shipping_method.delete({
      where: { id },
    });
  } catch (error) {
    if (error.code === "P2025") {
      throw new Error404(`Metode pengiriman dengan ID ${id} tidak ditemukan.`);
    }

    throw error;
  }
};
