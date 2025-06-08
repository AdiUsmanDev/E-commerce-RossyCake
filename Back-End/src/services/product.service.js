import prisma from "../configs/db.js";
import { Error404 } from "../utils/customError.js";

export const getAll = async () => {
  const products = await prisma.products.findMany();

  return products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: product.category,
      created_at: product.created_at,
    };
  });
};

export const getOne = async (code) => {
  const product = await prisma.products.findUnique({
    where: {
      id: parseInt(code),
    },
  });
  if (!product) {
    throw new Error404("Data Product tidak ditemukan");
  }
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    category: product.category,
    created_at: product.created_at,
  };
};

export const store = async (data) => {
  return await prisma.products.create({
    data,
  });
};

export const update = async (code, data) => {
  return await prisma.products.update({
    where: {
      id: parseInt(code),
    },
    data,
  });
};

export const destroy = async (code) => {
  const product = await prisma.products.findUnique({
    where: {
      id: parseInt(code),
    },
  });

  if (!product) throw new Error404("product tidak ditemukan");

  return await prisma.products.delete({
    where: {
      id: parseInt(code),
    },
  });
};
