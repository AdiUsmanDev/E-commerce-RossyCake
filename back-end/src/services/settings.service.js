import prisma from "../configs/db.js";

export const getGeneralSettings = async () => {
  let settings = await prisma.settings.findUnique({
    where: { id: 1 },
  });

  // Jika tabel settings masih kosong (inisialisasi pertama kali)
  if (!settings) {
    settings = await prisma.settings.create({
      data: {
        id: 1, // Pastikan ID-nya 1
        siteName: "Rossi Cake",
        siteTagline: "Kue Lezat, Momen Spesial",
        maintenanceMode: false,
      },
    });
  }

  return settings;
};

export const updateGeneralSettings = async (updateData) => {
  const updatedSettings = await prisma.settings.update({
    where: { id: 1 }, // Selalu update baris dengan ID 1
    data: updateData,
  });
  return updatedSettings;
};

