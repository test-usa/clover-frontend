import { FiMapPin } from "react-icons/fi";

const LocationInput = () => {
  return (
    <div className="w-full mt-5 px-4 sm:px-6 md:px-0">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-lg">
            <FiMapPin />
          </span>
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-[12px] shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationInput;
