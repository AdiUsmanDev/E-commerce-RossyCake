/*
  Warnings:

  - You are about to drop the column `name` on the `raw_materials` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `raw_materials` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[material_id]` on the table `raw_materials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `material_id` to the `raw_materials` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `raw_materials_name_key` ON `raw_materials`;

-- AlterTable
ALTER TABLE `raw_materials` DROP COLUMN `name`,
    DROP COLUMN `unit`,
    ADD COLUMN `material_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `materials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `unit` ENUM('gram', 'kilogram', 'pcs', 'liter', 'mililiter') NOT NULL,
    `barcode` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `materials_name_key`(`name`),
    UNIQUE INDEX `materials_barcode_key`(`barcode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `raw_materials_material_id_key` ON `raw_materials`(`material_id`);

-- AddForeignKey
ALTER TABLE `raw_materials` ADD CONSTRAINT `raw_materials_material_id_fkey` FOREIGN KEY (`material_id`) REFERENCES `materials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
