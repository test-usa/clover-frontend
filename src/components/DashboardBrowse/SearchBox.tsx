import { CiSearch } from "react-icons/ci";
import icon from '../../assets/Icon.png';

const SearchBox = () => {
  return (
    <div className="w-full mt-10 px-4 sm:px-6 md:px-0">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        {/* Search Input with Icon */}
        <div className="relative flex-1">
          <CiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={22}
          />
          <input
            type="text"
            placeholder="Search by name, skill, etc."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-[12px] shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>

        {/* Right Icon Button */}
        <button
          className="flex items-center justify-center bg-primary-50 hover:bg-primary-100 transition duration-200 p-2 sm:p-2.5 rounded-md border border-gray-200"
          aria-label="Filter or settings"
        >
          <img
            src={icon}
            alt="Filter"
            className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
