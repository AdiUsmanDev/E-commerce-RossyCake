/*
  Warnings:

  - Added the required column `defaultStock` to the `materials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `raw_materials` DROP FOREIGN KEY `raw_materials_material_id_fkey`;

-- DropIndex
DROP INDEX `raw_materials_material_id_key` ON `raw_materials`;

-- AlterTable
ALTER TABLE `materials` ADD COLUMN `defaultStock` DECIMAL(12, 2) NOT NULL;
