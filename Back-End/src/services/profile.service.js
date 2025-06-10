import bcrypt from "bcryptjs";
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
    name: user.name,
    phone: user.phone,
    email: user.email,
  };

  return result;
};

export const update = async (id, data) => {
  // Buat salinan data agar objek asli tidak termutasi
  const dataToUpdate = { ...data };

  // Logika untuk menangani password:
  // Jika ada password baru yang valid (bukan string kosong atau spasi),
  // lakukan hashing pada password baru tersebut.
  if (dataToUpdate.password && dataToUpdate.password.trim() !== "") {
    const saltRounds = 10; // Standar industri
    const hashedPassword = await bcrypt.hash(
      dataToUpdate.password.trim(),
      saltRounds
    );

    // Siapkan password yang sudah di-hash untuk di-update
    dataToUpdate.password = hashedPassword;
  } else {
    // Jika tidak ada password baru yang dikirim dari frontend,
    // HAPUS properti password dari objek yang akan di-update.
    // Ini adalah cara yang benar untuk "menggunakan password lama".
    // Prisma akan mengabaikan kolom password dan tidak mengubahnya sama sekali.
    delete dataToUpdate.password;
  }

  // Lakukan update ke database hanya dengan data yang relevan
  const updatedUser = await prisma.users.update({
    where: {
      id: parseInt(id),
    },
    data: dataToUpdate, // Prisma hanya akan meng-update field yang ada di objek ini
  });

  if (!updatedUser) {
    throw new Error404(
      "Pengguna tidak ditemukan. Pastikan informasi yang Anda masukkan sudah benar dan coba lagi."
    );
  }

  // Buat objek hasil untuk dikembalikan ke frontend.
  // Pastikan nama properti konsisten dengan yang diharapkan frontend.
  const result = {
    id: updatedUser.id,
    name: updatedUser.name, // Menggunakan 'fullName' agar konsisten
    phone: updatedUser.phone,
    email: updatedUser.email,
    updated_at: updatedUser.updated_at,
  };

  return result;
};
