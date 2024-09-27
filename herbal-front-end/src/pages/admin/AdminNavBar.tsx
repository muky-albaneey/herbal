import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/admin/dashboard" className="text-xl font-bold">
              Admin Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Link
              to="/admin/dashboard"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Users
            </Link>
            <Link
              to="/admin/orders"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Orders
            </Link>
            <Link
              to="/admin/products"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Products
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/admin/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Users
            </Link>
            <Link
              to="/admin/orders"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Orders
            </Link>
            <Link
              to="/admin/products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
