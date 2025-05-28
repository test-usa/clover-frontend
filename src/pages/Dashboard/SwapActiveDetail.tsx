import { Link } from 'react-router-dom';
import messageIcon from '../../assets/Vector.png'
import { IoIosArrowBack } from "react-icons/io";

const SwapActiveDetail = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-6 bg-white border-b border-gray-200 mb-5 px-4 py-4">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <div className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span><IoIosArrowBack/></span>
            <span className="text-[20px] sm:text-[24px]">Swap:</span>
            <span className="text-[20px] sm:text-[24px]">ID012345678</span>
          </div>
          <img src={messageIcon} alt="Message Icon" className="w-10 h-10 sm:hidden" />
        </div>

        <div className="hidden sm:flex flex-row items-center gap-3">
          <Link to='/dashboard/chat'>
          <img src={messageIcon} alt="Message Icon" className="w-10 h-10 cursor-pointer" />
          </Link>
          <button
            type="button"
            className="px-4 py-2 bg-white border border-primary-500 rounded-md text-sm font-medium text-primary-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            File A Dispute
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            Mark Completed
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center">
        <div className="w-full space-y-6 sm:space-y-8">
          {/* Header Section */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
              Branding & Identity for Web Development
            </h1>
            <p className="text-sm sm:text-base text-typo-600">
              Swapping with <span className="text-black font-medium ml-1">Neha Mayumi</span>
            </p>
          </div>

          {/* Status and Time Remaining */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            <div>
              <p className="font-bold text-lg sm:text-xl">Status</p>
              <p className="text-green-400 mt-1">Active</p>
            </div>
            <div>
              <p className="font-bold text-lg sm:text-xl">Time Remaining</p>
              <p className="text-info-600 mt-1">15 Days</p>
            </div>
          </div>

          {/* Swap Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            <div>
              <p className="font-bold text-lg sm:text-xl">Swap Started</p>
              <p className="text-info-600 mt-1">24 May 2025</p>
            </div>
            <div>
              <p className="font-bold text-lg sm:text-xl">Swap End</p>
              <p className="text-info-600 mt-1">23 June 2025</p>
            </div>
          </div>

          {/* Offers Section */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <p className="font-bold text-lg sm:text-xl">Neha Mayumi's Offer</p>
              <span className="mt-2 inline-block bg-success-100 bg-opacity-50 text-success-500 text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-green-600">
                Branding & Identity
              </span>
            </div>
            <div>
              <p className="font-bold text-lg sm:text-xl">My Offer</p>
              <span className="mt-2 inline-block bg-info-200 bg-opacity-50 text-info-600 text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-blue-600">
                Web Development
              </span>
            </div>
          </div>

          {/* Swap Details */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="font-bold text-lg sm:text-xl">Swap Details</h2>
            <p className="text-sm sm:text-base text-typo-600">
              I will design a logo for your blog, providing 3 initial concepts and 2 rounds of revisions.
              In return, I request developing a landing page for my pet shop.
            </p>
          </div>

          {/* Escrow Deposit */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="font-bold text-lg sm:text-xl">Escrow Deposit</h2>
            <div className="p-2 sm:p-3 rounded-lg border border-gray-300">
              <p className="text-base sm:text-lg font-bold text-typo-600">$50.00 USD</p>
            </div>
            <p className="text-xs sm:text-sm text-typo-600 mt-1">
              This deposit is held in escrow and returned to both parties upon successful swap completion. (5% platform fee)
            </p>
          </div>

          {/* Mobile-only: Action buttons at bottom */}
          <div className="flex gap-3 sm:hidden pt-4">
            <button
              type="button"
              className="w-full px-4 py-2 bg-white border border-primary-500 rounded-md text-sm font-medium text-primary-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              File A Dispute
            </button>
            <button
              type="button"
              className="w-full px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Mark Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapActiveDetail;
