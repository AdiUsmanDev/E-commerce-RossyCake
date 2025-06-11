/*
  Warnings:

  - You are about to drop the column `Image_url` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `Image_url`,
    ADD COLUMN `image_url` VARCHAR(191) NULL;
