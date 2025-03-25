import React, { useEffect, useState } from 'react';
import { SearchIcon, FilterIcon, GridIcon, ListIcon, ArrowUpIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FavoriteButton from '../components/common/FavoriteButton';
import { Link } from 'react-router-dom';
const ViewAllBooks = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const books = [{
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Fiction',
    rating: 4.5,
    isFavorite: false
  }
  // Add more books as needed
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6">All Books</h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-grow md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" placeholder="Search books..." className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" />
            </div>
            <div className="flex space-x-4 items-center">
              <div className="flex items-center space-x-2">
                <FilterIcon className="h-5 w-5 text-gray-500" />
                <select className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
                  <option value="All">All Genres</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                </select>
              </div>
              <div className="flex space-x-2 border border-gray-300 rounded-lg overflow-hidden">
                <button className={`p-2 ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'bg-white text-gray-500'}`} onClick={() => setViewMode('grid')}>
                  <GridIcon className="h-5 w-5" />
                </button>
                <button className={`p-2 ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'bg-white text-gray-500'}`} onClick={() => setViewMode('list')}>
                  <ListIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <motion.div layout className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-4'}>
          {books.map(book => <motion.div key={book.id} layout initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Link to={`/book/${book.id}`} className="block">
                <div className="relative h-48">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2">
                    <FavoriteButton initialState={book.isFavorite} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold hover:text-indigo-600 transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm">By {book.author}</p>
                </div>
              </Link>
            </motion.div>)}
        </motion.div>
        <AnimatePresence>
          {showScrollTop && <motion.button initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: 20
        }} onClick={scrollToTop} className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300">
              <ArrowUpIcon className="h-6 w-6" />
            </motion.button>}
        </AnimatePresence>
      </div>
    </div>;
};
export default ViewAllBooks;