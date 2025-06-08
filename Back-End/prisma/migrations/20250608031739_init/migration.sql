/*
  Warnings:

  - You are about to drop the column `created_at` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `is_custom_order` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `payment_date` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `admins` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cart_id,product_id]` on the table `cart_items` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customer_id]` on the table `carts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order_id]` on the table `custom_orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order_id]` on the table `feedbacks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payment_id]` on the table `invoices` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order_id]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gateway_transaction_id]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - Made the column `cart_id` on table `cart_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `cart_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `cart_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `customer_id` on table `carts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `carts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `customer_id` on table `feedbacks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `order_id` on table `feedbacks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `feedbacks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `submitted_at` on table `feedbacks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `payment_id` on table `invoices` required. This step will fail if there are existing NULL values in that column.
  - Made the column `generated_date` on table `invoices` required. This step will fail if there are existing NULL values in that column.
  - Made the column `file_url` on table `invoices` required. This step will fail if there are existing NULL values in that column.
  - Made the column `order_id` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `shipping_address` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_cost` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_method` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sub_total` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Made the column `customer_id` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total_price` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `expires_at` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Made the column `order_id` on table `payments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `amount` on table `payments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `payments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stock` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `cart_items` DROP FOREIGN KEY `cart_items_ibfk_1`;

-- DropForeignKey
ALTER TABLE `cart_items` DROP FOREIGN KEY `cart_items_ibfk_2`;

-- DropForeignKey
ALTER TABLE `carts` DROP FOREIGN KEY `carts_ibfk_1`;

-- DropForeignKey
ALTER TABLE `custom_orders` DROP FOREIGN KEY `custom_orders_ibfk_1`;

-- DropForeignKey
ALTER TABLE `expenses` DROP FOREIGN KEY `expenses_ibfk_1`;

-- DropForeignKey
ALTER TABLE `feedbacks` DROP FOREIGN KEY `feedbacks_ibfk_1`;

-- DropForeignKey
ALTER TABLE `feedbacks` DROP FOREIGN KEY `feedbacks_ibfk_2`;

-- DropForeignKey
ALTER TABLE `invoices` DROP FOREIGN KEY `invoices_ibfk_1`;

-- DropForeignKey
ALTER TABLE `order_items` DROP FOREIGN KEY `order_items_ibfk_1`;

-- DropForeignKey
ALTER TABLE `order_items` DROP FOREIGN KEY `order_items_ibfk_2`;

-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_ibfk_1`;

-- DropForeignKey
ALTER TABLE `payments` DROP FOREIGN KEY `payments_ibfk_1`;

-- DropIndex
DROP INDEX `customer_id` ON `carts`;

-- DropIndex
DROP INDEX `order_id` ON `custom_orders`;

-- DropIndex
DROP INDEX `payment_id` ON `invoices`;

-- DropIndex
DROP INDEX `order_id` ON `payments`;

-- AlterTable
ALTER TABLE `admins` DROP COLUMN `created_at`;

-- AlterTable
ALTER TABLE `cart_items` MODIFY `cart_id` INTEGER NOT NULL,
    MODIFY `product_id` INTEGER NOT NULL,
    MODIFY `quantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `carts` MODIFY `customer_id` INTEGER NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `feedbacks` MODIFY `customer_id` INTEGER NOT NULL,
    MODIFY `order_id` INTEGER NOT NULL,
    MODIFY `rating` INTEGER NOT NULL,
    MODIFY `submitted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `invoices` MODIFY `payment_id` INTEGER NOT NULL,
    MODIFY `generated_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `file_url` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `order_items` MODIFY `order_id` INTEGER NOT NULL,
    MODIFY `product_id` INTEGER NOT NULL,
    MODIFY `quantity` INTEGER NOT NULL,
    MODIFY `price` DECIMAL(12, 2) NOT NULL;

-- AlterTable
ALTER TABLE `orders` DROP COLUMN `date`,
    DROP COLUMN `is_custom_order`,
    ADD COLUMN `discount_amount` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ADD COLUMN `order_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `shipping_address` JSON NOT NULL,
    ADD COLUMN `shipping_cost` DECIMAL(12, 2) NOT NULL,
    ADD COLUMN `shipping_method` VARCHAR(100) NOT NULL,
    ADD COLUMN `sub_total` DECIMAL(12, 2) NOT NULL,
    ADD COLUMN `tracking_number` VARCHAR(100) NULL,
    ADD COLUMN `voucher_id` INTEGER NULL,
    MODIFY `customer_id` INTEGER NOT NULL,
    MODIFY `status` ENUM('PENDING_PAYMENT', 'PROCESSING', 'SHIPPED', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'PENDING_PAYMENT',
    MODIFY `total_price` DECIMAL(12, 2) NOT NULL;

-- AlterTable
ALTER TABLE `payments` DROP COLUMN `payment_date`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `expires_at` DATETIME(3) NOT NULL,
    ADD COLUMN `gateway_transaction_id` VARCHAR(255) NULL,
    ADD COLUMN `paid_at` DATETIME(3) NULL,
    ADD COLUMN `payment_code` TEXT NULL,
    ADD COLUMN `payment_gateway` VARCHAR(50) NOT NULL DEFAULT 'midtrans',
    ADD COLUMN `payment_url` TEXT NULL,
    MODIFY `order_id` INTEGER NOT NULL,
    MODIFY `amount` DECIMAL(12, 2) NOT NULL,
    MODIFY `payment_method` VARCHAR(100) NULL,
    MODIFY `status` ENUM('PENDING', 'SUCCESS', 'FAILED', 'EXPIRED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `products` MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `price` DECIMAL(12, 2) NOT NULL,
    MODIFY `stock` INTEGER NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- DropTable
DROP TABLE `customers`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `role` VARCHAR(50) NOT NULL DEFAULT 'customer',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `addresses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `label` VARCHAR(100) NOT NULL,
    `recipient` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `street` TEXT NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `province` VARCHAR(100) NOT NULL,
    `postal_code` VARCHAR(10) NOT NULL,
    `is_default` BOOLEAN NOT NULL DEFAULT false,

    INDEX `addresses_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vouchers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(50) NOT NULL,
    `description` TEXT NULL,
    `discount_value` DECIMAL(12, 2) NOT NULL,
    `discount_type` VARCHAR(20) NOT NULL,
    `max_discount` DECIMAL(12, 2) NULL,
    `min_purchase` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `valid_until` DATETIME(3) NOT NULL,
    `usage_limit` INTEGER NOT NULL,

    UNIQUE INDEX `vouchers_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `admins_email_key` ON `admins`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `cart_items_cart_id_product_id_key` ON `cart_items`(`cart_id`, `product_id`);

-- CreateIndex
CREATE UNIQUE INDEX `carts_customer_id_key` ON `carts`(`customer_id`);

-- CreateIndex
CREATE UNIQUE INDEX `custom_orders_order_id_key` ON `custom_orders`(`order_id`);

-- CreateIndex
CREATE UNIQUE INDEX `feedbacks_order_id_key` ON `feedbacks`(`order_id`);

-- CreateIndex
CREATE UNIQUE INDEX `invoices_payment_id_key` ON `invoices`(`payment_id`);

-- CreateIndex
CREATE INDEX `orders_voucher_id_idx` ON `orders`(`voucher_id`);

-- CreateIndex
CREATE UNIQUE INDEX `payments_order_id_key` ON `payments`(`order_id`);

-- CreateIndex
CREATE UNIQUE INDEX `payments_gateway_transaction_id_key` ON `payments`(`gateway_transaction_id`);

-- AddForeignKey
ALTER TABLE `addresses` ADD CONSTRAINT `addresses_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `carts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_voucher_id_fkey` FOREIGN KEY (`voucher_id`) REFERENCES `vouchers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_payment_id_fkey` FOREIGN KEY (`payment_id`) REFERENCES `payments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feedbacks` ADD CONSTRAINT `feedbacks_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feedbacks` ADD CONSTRAINT `feedbacks_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `expenses` ADD CONSTRAINT `expenses_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `admins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `custom_orders` ADD CONSTRAINT `custom_orders_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `cart_items` RENAME INDEX `cart_id` TO `cart_items_cart_id_idx`;

-- RenameIndex
ALTER TABLE `cart_items` RENAME INDEX `product_id` TO `cart_items_product_id_idx`;

-- RenameIndex
ALTER TABLE `expenses` RENAME INDEX `admin_id` TO `expenses_admin_id_idx`;

-- RenameIndex
ALTER TABLE `feedbacks` RENAME INDEX `customer_id` TO `feedbacks_customer_id_idx`;

-- RenameIndex
ALTER TABLE `feedbacks` RENAME INDEX `order_id` TO `feedbacks_order_id_idx`;

-- RenameIndex
ALTER TABLE `order_items` RENAME INDEX `order_id` TO `order_items_order_id_idx`;

-- RenameIndex
ALTER TABLE `order_items` RENAME INDEX `product_id` TO `order_items_product_id_idx`;

-- RenameIndex
ALTER TABLE `orders` RENAME INDEX `customer_id` TO `orders_customer_id_idx`;
