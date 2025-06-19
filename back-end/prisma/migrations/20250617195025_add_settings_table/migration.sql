-- CreateTable
CREATE TABLE `Settings` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `siteName` VARCHAR(191) NOT NULL DEFAULT 'Rossi Cake',
    `siteTagline` VARCHAR(191) NOT NULL DEFAULT 'Kue Lezat, Momen Spesial',
    `maintenanceMode` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
