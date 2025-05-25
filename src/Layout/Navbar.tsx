
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";


import logo from "../assets/logo.svg";
import { FiSearch } from "react-icons/fi";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
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
            <Link
              to="/"
              className="text-white text-2xl font-bold flex flex-row gap-1 items-center"
            >
              <img src={logo} alt="" />
              <h1 className="text-primary-900">SwapSpot</h1>
            </Link>
          </div>

          {/* Searchbar (hidden on sm and md when menu is open) */}
          <div
            className={`relative w-96 lg:block ${
              isOpen ? "hidden" : "hidden md:block"
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

          {/* Desktop Menu (hidden on sm and md when menu is open) */}
          <div
            className={`hidden lg:flex space-x-4 items-center ${
              isOpen ? "hidden" : ""
            }`}
          >
            <Link
              to="/how-it-works"
              className="text-black hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              How it Works
            </Link>
            <Link
              to="/pricing"
              className="text-black hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/security"
              className="text-black hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Security
            </Link>
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="border-primary-500 text-primary-500 hover:bg-primary-700 hover:text-white"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate("/register")}
              className="bg-primary-500 text-white hover:bg-primary-800"
            >
              Join/Register
            </Button>
          </div>

          {/* Mobile & MD Menu Button */}
          <div className="flex items-center lg:hidden">
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
      </div>

      {/* Mobile & MD Menu - absolute overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 space-y-6 z-40 lg:hidden max-h-[calc(100vh-64px)] overflow-auto">
          {/* Search bar */}
          <div className="relative w-full max-w-xl mx-auto">
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

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 max-w-xl mx-auto">
            
            <Link
              to="/how-it-works"
              className="block text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </Link>
            <Link
              to="/pricing"
              className="block text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/security"
              className="block text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Security
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 max-w-xl mx-auto">
            <Button
              variant="outline"
              onClick={() => {
                setIsOpen(false);
                navigate("/login");
              }}
              className="border-primary-500 text-primary-500 hover:bg-primary-700 hover:text-white w-full"
            >
              Sign In
            </Button>
            <Button
              onClick={() => {
                setIsOpen(false);
                navigate("/register");
              }}
              className="bg-primary-500 text-white hover:bg-primary-800 w-full"
            >
              Join/Register
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
