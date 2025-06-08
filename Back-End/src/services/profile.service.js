import prisma from "../configs/db.js";
import { Error404 } from "../utils/customError.js";

export const getProfile = async (id) => {
  const user = await prisma.users.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    throw new Error404(
      "Pengguna tidak ditemukan. Pastikan informasi yang Anda masukkan sudah benar dan coba lagi."
    );
  }

  const result = {
    id: user.id,
    fullName: user.name,
    phone: user.phone,
    email: user.email,
  };

  return result;
};

export const update = async (id, data) => {
  const { email, fullName, phone, password } = data;

  const updatedUser = await prisma.users.update({
    where: {
      id: parseInt(id),
    },
    data: {
      email,
      name: fullName,
      phone,
      password,
    },
  });

  if (!updatedUser) {
    throw new Error404(
      "Pengguna tidak ditemukan. Pastikan informasi yang Anda masukkan sudah benar dan coba lagi."
    );
  }

  const result = {
    id: updatedUser.id,
    fullName: updatedUser.name,
    phone: updatedUser.phone,
    email: updatedUser.email,
    updated_at: updatedUser.updated_at,
  };

  return result;
};
