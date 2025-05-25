import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import userAvatar from "../../assets/user.png"; // Replace with your actual avatar image path

const DashboardNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-3 relative z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white text-2xl font-bold flex flex-row gap-1 items-center">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <h1 className="text-primary-900">SwapSpot</h1>
            </div>
          </div>

          {/* Search Bar */}
          <div
            className={`relative w-full max-w-7xl mx-auto hidden md:block ${
              isOpen ? "hidden" : ""
            }`}
          >
            <input
              type="text"
              placeholder="What skill are you looking for?"
              className="pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-500 w-full text-base"
            />
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={22}
            />
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            <button className="relative text-gray-600 hover:text-gray-800 focus:outline-none">
              <FiBell size={22} />
              {/* Optional: Notification dot */}
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
              <img
                src={userAvatar}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Button (optional for responsiveness) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-black hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Search for mobile */}
        {isOpen && (
          <div className="mt-4 block md:hidden">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What skill are you looking for?"
                className="pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-500 w-full text-base"
              />
              <FiSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={22}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNav;
