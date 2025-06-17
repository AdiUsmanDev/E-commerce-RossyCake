/*
  Warnings:

  - A unique constraint covering the columns `[material_id]` on the table `raw_materials` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `raw_materials_material_id_key` ON `raw_materials`(`material_id`);

-- AddForeignKey
ALTER TABLE `raw_materials` ADD CONSTRAINT `raw_materials_material_id_fkey` FOREIGN KEY (`material_id`) REFERENCES `materials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
