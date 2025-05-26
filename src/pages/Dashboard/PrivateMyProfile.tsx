import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const PrivateMyProfile = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div>
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-2">
            <MdOutlineKeyboardArrowLeft className="text-3xl" />
            <h1 className="text-3xl">My Profile</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="border border-gray-200 px-4 py-2 rounded-md">
              Preview
            </button>
            <button className="border border-gray-200 bg-gray-300 px-4 py-2 rounded-md">
              Save
            </button>
          </div>
        </div>
        <hr className="text-gray-300 my-5" />
      </div>
      <div className="container max-w-4xl p-4">




        {/* Profile Section */}
        <div className="flex flex-col  gap-4">
          <img
            className="h-[65px] w-[65px] rounded-full"
            src="https://i.pravatar.cc/100?img=1"
            alt=""
          />
          <div className="mt-3 sm:mt-0">
            <h1 className="text-xl font-semibold">Profile Photo</h1>
            <div className="flex md:flex-col sm:flex-row gap-3 items-start sm:items-center mt-3">
              <button className="border border-gray-200 md:px-2 md:py-1 rounded-md">
                Upload Photo
              </button>
              <p>JPG, PNG, Max 2MB</p>
            </div>
          </div>
        </div>

        {/* Status & Verification */}
        <div className="flex  md:items-center md:justify-between gap-6 mt-6">
          {/* Status */}
          <div className="mt-3">
            <h1 className="text-xl font-semibold">Status</h1>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => setIsOn(!isOn)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isOn ? "bg-green-500" : "bg-gray-300"
                  }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-6" : ""
                    }`}
                />
              </button>
              <p>Available</p>
            </div>
          </div>

          {/* Verification */}
          <div className="mt-3">
            <h1 className="text-xl font-semibold">Verification</h1>
            <div className="flex gap-3">
              <p className="text-green-400">verified</p>
              <button>Verify Identity</button>
            </div>
          </div>
        </div>

        {/* Name and Location */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="w-full md:w-auto">
            <h1 className="font-semibold mb-2">Full Name</h1>
            <h3 className="border border-gray-200 p-2 rounded-md">
              James David
            </h3>
          </div>
          <div className="w-full md:w-auto">
            <h1 className="font-semibold mb-2">Location</h1>
            <h3 className="border border-gray-200 p-2 rounded-md">
              James David
            </h3>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <h1 className="font-semibold mb-2">Bio</h1>
          <p className="border border-gray-200 p-5 w-full  rounded-md">
            Creative graphic designer with 5+ years of experience specializing in
            branding and digital design. Passionate about clean aesthetics and
            effective visual communication. Eager to expand my skillset into web
            development to bring designs to life online.
          </p>
        </div>

        {/* Skills I Offer */}
        <div className="mt-6">
          <h1 className="font-semibold mb-2">Skills I Offer</h1>
          <p className="border border-gray-200 p-5 w-full rounded-md">
            <button className="text-blue-300 border-1 p-2 rounded-md">
              Web Development
            </button>
          </p>
        </div>

        {/* Skills I Want */}
        <div className="mt-6">
          <h1 className="font-semibold mb-2">Skills I Want</h1>
          <p className="border border-gray-200 p-5 w-full rounded-md">
            <button className="text-blue-300 border-1 p-2 rounded-md">
              Web Development
            </button>
          </p>
        </div>

        {/* Portfolio */}
        <div className="mt-6">
          <h1 className="font-semibold mb-2">Portfolio</h1>
          <p className="border border-gray-200 w-full p-3 rounded-md">
            Portfolio
          </p>
        </div>
      </div></>
  );
};

export default PrivateMyProfile;
