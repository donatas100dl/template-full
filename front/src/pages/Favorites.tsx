import React, { useState, Children } from 'react';
import { HeartIcon, XIcon, StarIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const Favorites = () => {
  // Mock data for favorite books
  const [favoriteBooks, setFavoriteBooks] = useState([{
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Fiction',
    rating: 4.5,
    dateAdded: '2023-06-15'
  }, {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Self-Help',
    rating: 4.8,
    dateAdded: '2023-07-22'
  }, {
    id: 3,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Sci-Fi',
    rating: 4.6,
    dateAdded: '2023-05-30'
  }]);
  const removeFromFavorites = id => {
    setFavoriteBooks(favoriteBooks.filter(book => book.id !== id));
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <HeartIcon className="h-6 w-6 text-pink-500" />
            <h1 className="text-3xl font-bold">Your Favorites</h1>
          </div>
          <div className="text-gray-600">
            {favoriteBooks.length}{' '}
            {favoriteBooks.length === 1 ? 'book' : 'books'}
          </div>
        </div>
        {favoriteBooks.length === 0 ? <motion.div className="bg-white rounded-xl shadow-md p-12 text-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartIcon className="h-10 w-10 text-pink-300" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No favorite books yet
            </h3>
            <p className="text-gray-500 mb-6">
              Books you mark as favorites will appear here.
            </p>
            <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              Browse Books
            </button>
          </motion.div> : <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="visible">
            {favoriteBooks.map(book => <motion.div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative" variants={itemVariants}>
                <button className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md hover:bg-red-50 transition-colors duration-300" onClick={() => removeFromFavorites(book.id)}>
                  <XIcon className="h-5 w-5 text-red-500" />
                </button>
                <div className="flex">
                  <div className="w-1/3">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-2/3 p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
                          {book.genre}
                        </div>
                        <h3 className="text-lg font-bold mb-1 hover:text-indigo-600 transition-colors duration-300">
                          <a href="#">{book.title}</a>
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          By {book.author}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                      <span className="text-xs text-gray-500 ml-1">
                        {book.rating}/5
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Added on {new Date(book.dateAdded).toLocaleDateString()}
                      </span>
                      <button className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                        Read Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>}
        {favoriteBooks.length > 0 && <div className="mt-12 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">
              Recommended Based on Your Favorites
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
            id: 4,
            title: 'Educated',
            author: 'Tara Westover',
            cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            genre: 'Biography',
            rating: 4.4
          }, {
            id: 5,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            genre: 'Classic',
            rating: 4.3
          }, {
            id: 6,
            title: 'The Psychology of Money',
            author: 'Morgan Housel',
            cover: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            genre: 'Finance',
            rating: 4.7
          }].map((book, index) => <motion.div key={book.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.3,
            delay: 0.5 + index * 0.1
          }}>
                  <div className="h-36 overflow-hidden">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
                      {book.genre}
                    </div>
                    <h3 className="text-md font-bold mb-1 hover:text-indigo-600 transition-colors duration-300">
                      <a href="#">{book.title}</a>
                    </h3>
                    <p className="text-gray-600 text-xs mb-2">
                      By {book.author}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {'★'.repeat(Math.floor(book.rating))}
                          {'☆'.repeat(5 - Math.floor(book.rating))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                          {book.rating}/5
                        </span>
                      </div>
                      <button className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                        + Add to Favorites
                      </button>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>}
      </div>
    </div>;
};
export default Favorites;