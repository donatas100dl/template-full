import React, { useState } from 'react';
import { SearchIcon, FilterIcon, GridIcon, ListIcon, BookOpenIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const Dashboard = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedGenre, setSelectedGenre] = useState('All');
  // Mock data for books
  const books = [{
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Fiction',
    rating: 4.5,
    lastRead: '2 days ago'
  }, {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Self-Help',
    rating: 4.8,
    lastRead: '1 week ago'
  }, {
    id: 3,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Sci-Fi',
    rating: 4.6,
    lastRead: '3 days ago'
  }, {
    id: 4,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Finance',
    rating: 4.7,
    lastRead: 'Just now'
  }, {
    id: 5,
    title: 'Educated',
    author: 'Tara Westover',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Biography',
    rating: 4.4,
    lastRead: '2 weeks ago'
  }, {
    id: 6,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Classic',
    rating: 4.3,
    lastRead: '1 month ago'
  }];
  const genres = ['All', 'Fiction', 'Self-Help', 'Sci-Fi', 'Finance', 'Biography', 'Classic'];
  const filteredBooks = selectedGenre === 'All' ? books : books.filter(book => book.genre === selectedGenre);
  return <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-grow md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" placeholder="Search your books..." className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" />
            </div>
            <div className="flex space-x-4 items-center">
              <div className="flex items-center space-x-2">
                <FilterIcon className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">Filter:</span>
                <select className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
                  {genres.map(genre => <option key={genre} value={genre}>
                      {genre}
                    </option>)}
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
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Your Books</h2>
          {filteredBooks.length === 0 ? <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <BookOpenIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No books found
              </h3>
              <p className="text-gray-500">
                Try changing your filters or adding some books to your
                collection.
              </p>
            </div> : viewMode === 'grid' ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book, index) => <motion.div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: index * 0.05
          }}>
                  <div className="h-48 overflow-hidden">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
                      {book.genre}
                    </div>
                    <h3 className="text-lg font-bold mb-1 hover:text-indigo-600 transition-colors duration-300">
                      <a href="#">{book.title}</a>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
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
                      <span className="text-xs text-gray-500">
                        {book.lastRead}
                      </span>
                    </div>
                  </div>
                </motion.div>)}
            </div> : <div className="space-y-4">
              {filteredBooks.map((book, index) => <motion.div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.2,
            delay: index * 0.05
          }}>
                  <div className="flex">
                    <div className="w-24 h-32 overflow-hidden">
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
                            {book.genre}
                          </div>
                          <h3 className="text-lg font-bold mb-1 hover:text-indigo-600 transition-colors duration-300">
                            <a href="#">{book.title}</a>
                          </h3>
                          <p className="text-gray-600 text-sm">
                            By {book.author}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-1">
                            {'★'.repeat(Math.floor(book.rating))}
                            {'☆'.repeat(5 - Math.floor(book.rating))}
                          </div>
                          <span className="text-xs text-gray-500">
                            {book.rating}/5
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          Last read: {book.lastRead}
                        </span>
                        <div className="space-x-2">
                          <button className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                            Continue Reading
                          </button>
                          <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </div>}
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Reading Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">12</div>
              <div className="text-gray-600">Books Read</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">48</div>
              <div className="text-gray-600">Hours Spent Reading</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">3</div>
              <div className="text-gray-600">Currently Reading</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;