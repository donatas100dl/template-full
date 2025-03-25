-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_author_id_fkey`;

-- DropIndex
DROP INDEX `books_author_id_key` ON `books`;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
