
-- Select the database to use
USE lib;

-- Create the 'books' table
CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  genre VARCHAR(255),
  publication_year INT
);

-- Insert 20 books into the 'books' table
INSERT INTO books (title, author, genre, publication_year) VALUES
('Pride and Prejudice', 'Jane Austen', 'Classic', 1813),
('To Kill a Mockingbird', 'Harper Lee', 'Classic', 1960),
('1984', 'George Orwell', 'Dystopian', 1949),
('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925),
('Moby-Dick', 'Herman Melville', 'Adventure', 1851),
('One Hundred Years of Solitude', 'Gabriel García Márquez', 'Magical Realism', 1967),
('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 1954),
('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 'Fantasy', 1997),
('The Catcher in the Rye', 'J.D. Salinger', 'Classic', 1951),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1937),
('Little Women', 'Louisa May Alcott', 'Classic', 1868),
('Jane Eyre', 'Charlotte Brontë', 'Classic', 1847),
('The Adventures of Huckleberry Finn', 'Mark Twain', 'Classic', 1884),
('Wuthering Heights', 'Emily Brontë', 'Classic', 1847),
('The Picture of Dorian Gray', 'Oscar Wilde', 'Gothic', 1890),
('Crime and Punishment', 'Fyodor Dostoevsky', 'Classic', 1866),
('Alice\'s Adventures in Wonderland', 'Lewis Carroll', 'Fantasy', 1865),
('Frankenstein', 'Mary Shelley', 'Gothic', 1818),
('The Odyssey', 'Homer', 'Epic', -800),
('Don Quixote', 'Miguel de Cervantes', 'Classic', 1605);

-- Create the 'users' table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255)
);

-- Insert users into the 'users' table
INSERT INTO users (username, email, first_name, last_name) VALUES
('user1', 'user1@example.com', 'John', 'Doe'),
('user2', 'user2@example.com', 'Jane', 'Smith'),
('user3', 'user3@example.com', 'Robert', 'Jones'),
('user4', 'user4@example.com', 'Mary', 'Brown'),
('user5', 'user5@example.com', 'Michael', 'Davis');

-- Create the 'user_favorites' table for the relationship
CREATE TABLE user_favorites (
  user_id INT,
  book_id INT,
  PRIMARY KEY (user_id, book_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (book_id) REFERENCES books(id)
);

-- Add some favorite books for users
INSERT INTO user_favorites (user_id, book_id) VALUES
(1, 1),
(1, 7),
(1, 15),
(1, 20),
(1, 14),
(2, 2),
(2, 4),
(2, 16),
(2, 9),
(3, 3),
(3, 8),
(3, 17),
(3, 11),
(4, 5),
(4, 10),
(4, 18),
(4, 12),
(5, 6),
(5, 19),
(5, 13);
