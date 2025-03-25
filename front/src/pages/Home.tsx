import React from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, BookOpenIcon, UsersIcon, BookIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const Home = () => {
  // Featured books data
  const featuredBooks = [{
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Fiction'
  }, {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Self-Help'
  }, {
    id: 3,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Sci-Fi'
  }, {
    id: 4,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    genre: 'Finance'
  }];

  // Popular categories
  const categories = [{
    name: 'Fiction',
    icon: <BookIcon className="h-5 w-5" />,
    color: 'bg-blue-100 text-blue-600'
  }, {
    name: 'Non-Fiction',
    icon: <BookOpenIcon className="h-5 w-5" />,
    color: 'bg-green-100 text-green-600'
  }, {
    name: 'Science',
    icon: <BookIcon className="h-5 w-5" />,
    color: 'bg-purple-100 text-purple-600'
  }, {
    name: 'History',
    icon: <BookIcon className="h-5 w-5" />,
    color: 'bg-yellow-100 text-yellow-600'
  }, {
    name: 'Biography',
    icon: <UsersIcon className="h-5 w-5" />,
    color: 'bg-pink-100 text-pink-600'
  }, {
    name: 'Self-Help',
    icon: <BookIcon className="h-5 w-5" />,
    color: 'bg-indigo-100 text-indigo-600'
  }];
  return <div className="w-full bg-white">
      {/* Hero section */}
      <div className="relative pt-24 pb-16 bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div className="w-full md:w-1/2 text-center md:text-left text-white" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Discover Your Next Favorite Book
              </h1>
              <p className="text-lg md:text-xl mb-8 text-indigo-100">
                Explore thousands of books, create your own library, and connect
                with readers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link to="/auth" className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                  Get Started
                </Link>
                <a href="#featured" className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300" onClick={e => {
                e.preventDefault();
                document.getElementById('featured')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  Explore Books
                </a>
              </div>
            </motion.div>
            <motion.div className="w-full md:w-1/2 mt-12 md:mt-0" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <div className="relative">
                <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Books collection" className="rounded-lg shadow-2xl" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg transform -rotate-3 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Search section */}
      <div className="container mx-auto px-4 md:px-6 -mt-8">
        <div className="bg-white rounded-lg shadow-xl p-6 relative z-20">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0">
            <div className="flex-grow">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" placeholder="Search for books, authors, or genres..." className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" />
              </div>
            </div>
            <div className="flex space-x-4">
              <select className="bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300">
                <option>All Genres</option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Science</option>
                <option>History</option>
              </select>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Categories section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => <motion.div key={index} className={`${category.color} rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-all duration-300`} whileHover={{
          y: -5
        }} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: index * 0.1
        }}>
              <div className="flex justify-center mb-3">{category.icon}</div>
              <h3 className="font-medium">{category.name}</h3>
            </motion.div>)}
        </div>
      </div>
      {/* Featured books section */}
      <div id="featured" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book, index) => <motion.div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: index * 0.1
          }}>
                <div className="h-64 overflow-hidden">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
                    {book.genre}
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-indigo-600 transition-colors duration-300">
                    <a href="#">{book.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4">By {book.author}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">{'★★★★☆'}</div>
                      <span className="text-xs text-gray-500 ml-1">4.0/5</span>
                    </div>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                      + Add to Favorites
                    </button>
                  </div>
                </div>
              </motion.div>)}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              View All Books
            </button>
          </div>
        </div>
      </div>
      {/* Call to action */}
      <div className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to start your reading journey?
            </h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of book lovers and start building your digital
              library today.
            </p>
            <Link to="/auth" className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Sign Up Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default Home;