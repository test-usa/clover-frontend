import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";


const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner p-6 relative z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 ">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <div className="flex flex-row gap-2">
              <img src={logo} alt="SwapSpot Logo" className="h-8 w-auto" />
              <h1 className="text-primary-900 text-xl font-bold">SwapSpot</h1>
            </div>
            <p>© SwapSpot International Ltd. 2025</p>
          </div>



          {/* Terms and Privacy Links */}
          <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600">
            <Link
              to="/terms-of-service"
              className="underline"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className="underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
