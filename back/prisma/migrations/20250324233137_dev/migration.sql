-- CreateTable
CREATE TABLE `books` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(255) NULL,
    `publication_year` INTEGER NULL,
    `description` VARCHAR(191) NOT NULL,
    `author_id` INTEGER NOT NULL,

    UNIQUE INDEX `books_id_key`(`id`),
    UNIQUE INDEX `books_title_key`(`title`),
    UNIQUE INDEX `books_author_id_key`(`author_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `page_number` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `bookId` INTEGER NOT NULL,

    UNIQUE INDEX `pages_id_key`(`id`),
    UNIQUE INDEX `pages_bookId_key`(`bookId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_favorites` (
    `user_id` INTEGER NOT NULL,
    `book_id` INTEGER NOT NULL,

    UNIQUE INDEX `user_favorites_user_id_key`(`user_id`),
    UNIQUE INDEX `user_favorites_book_id_key`(`book_id`),
    INDEX `user_favorites_book_id_idx`(`book_id`),
    PRIMARY KEY (`user_id`, `book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_id_key`(`id`),
    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pages` ADD CONSTRAINT `pages_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_favorites` ADD CONSTRAINT `user_favorites_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_favorites` ADD CONSTRAINT `user_favorites_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
