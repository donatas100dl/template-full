import React from 'react';
import { BookOpenIcon, GithubIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpenIcon className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">BookHaven</span>
            </div>
            <p className="text-gray-400 text-sm">
              Discover, share, and publish books in our modern digital library.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Favorites
                </Link>
              </li>
              <li>
                <Link to="/publish" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Publish Book
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Fiction
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Non-Fiction
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Science
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  History
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Biography
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Copyright
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} BookHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;