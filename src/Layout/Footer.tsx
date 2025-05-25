import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner py-6 px-4 sm:px-6 lg:px-12 relative z-10">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo and copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <img src={logo} alt="SwapSpot Logo" className="h-8 w-auto" />
              <h1 className="text-primary-900 text-xl font-bold">SwapSpot</h1>
            </div>
            <p className="text-sm text-gray-600">
              © SwapSpot International Ltd. 2025
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600 text-center md:text-right">
            <Link to="/terms-of-service" className="underline">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="underline">
              Privacy Policy!
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
