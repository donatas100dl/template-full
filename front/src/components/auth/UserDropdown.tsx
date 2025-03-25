import React, { useEffect, useState, useRef } from 'react';
import { UserIcon, LogOutIcon, SettingsIcon, BookmarkIcon } from 'lucide-react';
const UserDropdown = ({
  user,
  onLogout
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return <div className="relative" ref={dropdownRef}>
      <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300" onClick={toggleDropdown}>
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
          {user?.username?.charAt(0).toUpperCase() || <UserIcon className="h-5 w-5" />}
        </div>
      </button>
      {isOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transform origin-top-right transition-all duration-200 ease-in-out">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">
              {user?.username || 'User'}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user?.email || 'user@example.com'}
            </p>
          </div>
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
            <UserIcon className="h-4 w-4 mr-2 text-gray-500" />
            Profile
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
            <BookmarkIcon className="h-4 w-4 mr-2 text-gray-500" />
            My Books
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
            <SettingsIcon className="h-4 w-4 mr-2 text-gray-500" />
            Settings
          </a>
          <div className="border-t border-gray-100">
            <button onClick={onLogout} className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-150">
              <LogOutIcon className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>}
    </div>;
};
export default UserDropdown;