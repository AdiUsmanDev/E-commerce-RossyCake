import bcrypt from "bcrypt";
import prisma from "../configs/db.js";
import { Error404, Error409 } from "../utils/customError.js";

/**
 * Service untuk mengambil semua data pengguna.
 */
export const getAllUsers = async () => {
  const users = await prisma.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      created_at: true,
      updated_at: true,
    },
    orderBy: { created_at: "desc" },
  });
  return users;
};

/**
 * Service untuk membuat pengguna baru oleh Admin.
 */
export const createUser = async (userData) => {
  const { name, email, password, phone, role } = userData;
  const existingUser = await prisma.users.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error409("Email sudah terdaftar.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.users.create({
    data: { name, email, password: hashedPassword, phone, role },
  });

  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

/**
 * Service untuk memperbarui data pengguna oleh Admin.
 */
export const updateUser = async (userId, updateData) => {
  const dataToUpdate = { ...updateData };

  // Jika ada password baru, hash sebelum disimpan
  if (dataToUpdate.password) {
    dataToUpdate.password = await bcrypt.hash(dataToUpdate.password, 10);
  }

  try {
    const updatedUser = await prisma.users.update({
      where: { id: parseInt(userId, 10) },
      data: dataToUpdate,
    });
    const { password, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  } catch (error) {
    // Handle kasus jika user ID tidak ditemukan
    if (error.code === "P2025") {
      throw new Error404(`Pengguna dengan ID ${userId} tidak ditemukan.`);
    }
    throw error;
  }
};

/**
 * Service untuk menghapus pengguna.
 */
export const deleteUser = async (userId) => {
  try {
    await prisma.users.delete({
      where: { id: parseInt(userId, 10) },
    });
    // Tidak perlu mengembalikan apa pun jika berhasil
  } catch (error) {
    if (error.code === "P2025") {
      throw new Error404(`Pengguna dengan ID ${userId} tidak ditemukan.`);
    }
    throw error;
  }
};
