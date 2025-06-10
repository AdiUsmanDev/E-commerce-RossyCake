import prisma from "../configs/db.js";

import {
  Error400,
  Error401,
  Error404,
  Error409,
} from "../utils/customError.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

export const login = async ({ email, password }) => {
  try {
    //validasi input
    if (!email || !password) {
      throw new Error400("Email dan kata sandi harus diisi!");
    }

    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error400("Email tidak valid!");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error400("Kata sandi tidak valid!");
    }
    //generate JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const userData = {
      userId: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    };

    return {
      token,
      user: userData,
    };
  } catch (error) {
    if (error instanceof Error400 || error instanceof Error401) {
      throw error;
    } else {
      throw new Error("Internal Server Error");
    }
  }
};
export const register = async (data) => {
  const { email, password, name } = data;

  const existingUser = await prisma.users.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error409(
      "Alamat email yang Anda masukkan sudah digunakan. Silakan coba dengan alamat email yang berbeda."
    );
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.users.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  const { password: _, ...userWithoutPassword } = newUser;

  return {
    message: "Registrasi Berhasil",
    user: userWithoutPassword,
  };
};
