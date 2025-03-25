import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, HeartIcon, PlusCircleIcon, LayoutDashboardIcon, MenuIcon, XIcon, BookIcon, LibraryIcon } from 'lucide-react';
import UserDropdown from '../auth/UserDropdown';
const Navbar = ({
  isAuthenticated,
  user,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <BookOpenIcon className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">BookHaven</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
              Home
            </Link>
            <Link to="/books" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center">
              <LibraryIcon className="h-4 w-4 mr-1" />
              Browse Books
            </Link>
            {isAuthenticated && <>
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <LayoutDashboardIcon className="h-4 w-4 mr-1" />
                  Dashboard
                </Link>
                <Link to="/favorites" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <HeartIcon className="h-4 w-4 mr-1" />
                  Favorites
                </Link>
                <Link to="/publish" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <PlusCircleIcon className="h-4 w-4 mr-1" />
                  Publish Book
                </Link>
              </>}
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? <UserDropdown user={user} onLogout={onLogout} /> : <Link to="/auth" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 hidden md:block">
                Sign In
              </Link>}
            <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-4 transition-all duration-300 ease-in-out">
            <Link to="/" className="block text-gray-700 hover:text-indigo-600 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            {isAuthenticated ? <>
                <Link to="/dashboard" className="block text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <LayoutDashboardIcon className="h-4 w-4 mr-1" />
                  Dashboard
                </Link>
                <Link to="/favorites" className="block text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <HeartIcon className="h-4 w-4 mr-1" />
                  Favorites
                </Link>
                <Link to="/publish" className="block text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <PlusCircleIcon className="h-4 w-4 mr-1" />
                  Publish Book
                </Link>
              </> : <Link to="/auth" className="block text-gray-700 hover:text-indigo-600 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                Sign In
              </Link>}
          </div>}
      </div>
    </nav>;
};
export default Navbar;