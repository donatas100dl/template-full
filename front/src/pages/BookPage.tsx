import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, BookOpenIcon, ClockIcon, BookmarkIcon, ShareIcon } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import FavoriteButton from '../components/common/FavoriteButton';
const BookPage = () => {
  const {
    id
  } = useParams();
  // Mock book data - in a real app, fetch this based on the id
  const book = {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Fiction',
    rating: 4.5,
    readTime: '6 hours',
    description: `Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?
    A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time.`,
    chapters: 24,
    pages: 304,
    published: '2020',
    isFavorite: false
  };
  return <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link to="/books" className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200 mb-6">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Books
          </Link>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Book cover */}
              <div className="md:w-1/3 relative">
                <div className="aspect-[3/4] relative">
                  <img src={book.cover} alt={book.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="absolute top-4 right-4">
                  <FavoriteButton initialState={book.isFavorite} size="lg" />
                </div>
              </div>
              {/* Book details */}
              <div className="p-8 md:w-2/3">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    {book.genre}
                  </span>
                  <div className="flex items-center space-x-2">
                    <ShareIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    <BookmarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6">by {book.author}</p>
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center">
                    <BookOpenIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{book.pages} pages</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{book.readTime} read</span>
                  </div>
                </div>
                <div className="prose prose-indigo max-w-none mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    About this book
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {book.description}
                  </p>
                </div>
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                  <BookOpenIcon className="h-5 w-5 mr-2" />
                  Start Reading
                </motion.button>
              </div>
            </div>
            {/* Book details tabs */}
            <div className="border-t border-gray-200 px-8 py-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {book.rating}
                  </div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {book.chapters}
                  </div>
                  <div className="text-sm text-gray-600">Chapters</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {book.pages}
                  </div>
                  <div className="text-sm text-gray-600">Pages</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {book.published}
                  </div>
                  <div className="text-sm text-gray-600">Published</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default BookPage;