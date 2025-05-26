import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const IdentityVerification = () => {
  return (
    <div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">First Name</label>
          <input
            type="text"
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
          <PhoneInput
            country={'us'}
            enableSearch
            inputClass="!w-full !pl-14 !pr-4 !py-2.5 !border !border-gray-300 !rounded-[12px] !text-sm sm:!text-base focus:!outline-none focus:!ring-2 focus:!ring-indigo-500 focus:!border-indigo-500 transition !duration-200"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Country</label>
          <select
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          >
            <option value="">Select Country</option>
            <option>Bangladesh</option>
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
        </div>

        {/* State / Province */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">State / Province</label>
          <select
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          >
            <option value="">Select State</option>
            <option>Dhaka</option>
            <option>Delhi</option>
            <option>California</option>
          </select>
        </div>

        {/* ZIP Code */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">ZIP Code</label>
          <select
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          >
            <option value="">Select ZIP</option>
            <option>1207</option>
            <option>10001</option>
            <option>110001</option>
          </select>
        </div>

        {/* Address - Right Side of 3rd Row */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Address</label>
          <input
            type="text"
            placeholder="Road / Flat Name"
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>

        {/* Upload Photo */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium text-gray-700">Photo</label>

          <div className="inline-flex items-center border border-gray-300 rounded-[12px] px-3 py-2.5">
            <label
              htmlFor="photo-upload"
              className="bg-[#E5E7EB] hover:bg-gray-300 text-black text-sm font-medium px-3 py-2 rounded-md cursor-pointer transition duration-200"
            >
              Upload Photo
            </label>
            <input
              type="file"
              id="photo-upload"
              accept="image/png, image/jpeg"
              className="hidden"
            />
          </div>

          <span className="text-sm text-gray-500 mt-2  ml-3">JPG, PNG, Max 2MB</span>
        </div>

        {/* passport */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium text-gray-700">Passport/Driving License</label>

          <div className="inline-flex items-center border border-gray-300 rounded-[12px] px-3 py-2.5">
            <label
              htmlFor="photo-upload"
              className="bg-[#E5E7EB] hover:bg-gray-300 text-black text-sm font-medium px-3 py-2 rounded-md cursor-pointer transition duration-200"
            >
              Passport/Driving License
            </label>
            <input
              type="file"
              id="photo-upload"
              accept="image/png, image/jpeg"
              className="hidden"
            />
          </div>

          <span className="text-sm text-gray-500 mt-2 ml-3">JPG, PNG, Max 2MB</span>
        </div>

        <div className="flex items-start space-x-3 mt-4">
          <input
            type="checkbox"
            id="agree"
            className="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded-[4px] focus:ring-indigo-500 bg-[#D2D6DB]"
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            By signing up or logging in, I accept the SwapSpot’s  Terms of Service and Privacy Policy
          </label>
        </div>

      </form>
      <hr className='mt-10 text-gray-200' />
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium px-6 py-3 rounded-md shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          Submit
        </button>
      </div>

    </div>
  );
};

export default IdentityVerification;
