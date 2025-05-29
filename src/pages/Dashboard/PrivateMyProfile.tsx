import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import img from "../../assets/Vector (1).png";

const PrivateMyProfile = () => {
  const [isOn, setIsOn] = useState(false);

  const [formValues, setFormValues] = useState({
    fullName: "James David",
    location: "New York, USA",
    bio: `Creative graphic designer with 5+ years of experience specializing in
branding and digital design. Passionate about clean aesthetics and
effective visual communication. Eager to expand my skillset into web
development to bring designs to life online.`,
    skillsIOffer: ["Web Development", "React", "Responsive Design Implementation"],
    skillsIWant: [
      "Graphic Design",
      "Logo Design",
      "Branding & Identity",
      "UI/UX Design (Visual)",
      "Adobe Creative Suite"
    ],
    portfolio: null,
  });

  const handleChange = (field: any) => (e: any) => {
    setFormValues({ ...formValues, [field]: e.target.value });
  };

  const [profilePhoto, setProfilePhoto] = useState("https://i.pravatar.cc/100?img=1");

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePhoto(imageUrl);


    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // prevent default form reload

    const formData = new FormData();
    formData.append("fullName", formValues.fullName);
    formData.append("location", formValues.location);
    formData.append("bio", formValues.bio);
    formData.append("status", isOn.toString());

    if (formValues.portfolio) {
      formData.append("portfolio", formValues.portfolio);
    }

    formValues.skillsIOffer.forEach((skill, i) =>
      formData.append(`skillsIOffer[${i}]`, skill)
    );
    formValues.skillsIWant.forEach((skill, i) =>
      formData.append(`skillsIWant[${i}]`, skill)
    );

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="pt-4 px-2">
        <div className="flex justify-between gap-4">
          <div className="flex items-center gap-2">
            <MdOutlineKeyboardArrowLeft className="text-3xl" />
            <h1 className="text-[24px] text-typo-900 font-bold font-manrope">My Profile</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="border border-gray-300 text-typo-900 font-manrope font-bold text-[14px] px-4 py-2 rounded-md"
            >
              Preview
            </button>
            <button
              type="submit"
              className="border bg-gray-400 text-white text-[14px] font-manrope font-bold px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
        <hr className="text-gray-300 my-5" />
      </div>

      <div className="container max-w-4xl p-4">

        {/* Profile Photo Upload */}
        <div className="flex flex-col gap-4">
          <img
            className="h-[65px] w-[65px] rounded-full"
            src={profilePhoto}
            alt="Profile Photo"
          />
          <div>
            <h1 className="text-[20px] font-manrope font-bold text-typo-900">Profile Photo</h1>
            <div className="flex gap-3 items-start sm:items-center mt-3">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="uploadPhoto"
                accept="image/png, image/jpeg"
              />
              <label
                htmlFor="uploadPhoto"
                className="cursor-pointer border border-gray-200 bg-gray-50 font-bold font-manrope text-typo-900 md:px-2 md:py-1 rounded-md"
              >
                Upload Photo
              </label>
              <p className="text-[16px] text-gray-500 font-manrope font-medium">JPG, PNG, Max 2MB</p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="flex md:items-center md:justify-between gap-6 mt-6">
          <div>
            <h1 className="text-[20px] font-manrope font-bold text-typo-900">Status</h1>
            <div className="flex items-center gap-4 mt-2">
              <button
                type="button"
                onClick={() => setIsOn(!isOn)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isOn ? "bg-success-500" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-6" : ""
                    }`}
                />
              </button>
              <p className="text-success-500 font-manrope font-medium">{isOn ? "Available" : "Unavailable"}</p>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-manrope font-bold text-typo-900">Verification</h1>
            <div className="flex items-center gap-3">
              <p className="text-green-400 font-manrope font-medium">Verified</p>
              <button
                disabled
                className="border px-2 py-1 rounded-md border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed font-manrope font-medium"
              >
                Verify Identity
              </button>
            </div>
          </div>
        </div>

        {/* Full Name & Location */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <h1 className="text-[14px] font-manrope font-bold text-typo-900 mb-2">Full Name</h1>
            <input
              type="text"
              value={formValues.fullName}
              onChange={handleChange("fullName")}
              className="border border-gray-200 bg-white font-manrope font-medium text-[14px] p-2 rounded-md w-full"
            />
          </div>
          <div>
            <h1 className="text-[14px] font-manrope font-bold text-typo-900 mb-2">Location</h1>
            <div className="flex items-center gap-3 border border-gray-200 bg-white p-2 rounded-md">
              <IoLocationOutline className="text-typo-900" />
              <input
                type="text"
                value={formValues.location}
                onChange={handleChange("location")}
                className="font-manrope font-medium text-[14px] w-full outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <h1 className="text-[20px] font-manrope font-bold text-typo-900 mb-2">Bio</h1>
          <textarea
            value={formValues.bio}
            onChange={handleChange("bio")}
            className="border border-gray-200 p-5 w-full text-[16px] font-manrope font-medium text-typo-700 rounded-md resize-none"
            rows={6}
          />
        </div>

        {/* Skills I Offer */}
        <div className="mt-6">
          <h2 className="text-lg font-manrope font-bold text-typo-900 mb-3">Skills I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border border-gray-200 p-4 rounded-md">
            {formValues.skillsIOffer.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 border border-info-50 p-2 rounded-md"
              >
                <span className="text-info-600 text-xs font-manrope font-medium">{skill}</span>
                <CiCircleRemove />
              </div>
            ))}
          </div>
        </div>

        {/* Skills I Want */}
        <div className="mt-6">
          <h2 className="text-lg font-manrope font-bold text-typo-900 mb-3">Skills I Want</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border border-gray-200 p-4 rounded-md">
            {formValues.skillsIWant.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 border border-info-50 p-2 rounded-md"
              >
                <span className="text-info-600 text-xs font-manrope font-medium">{skill}</span>
                <CiCircleRemove />
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Upload */}
        <div className="mt-6">
          <h1 className="text-[20px] font-manrope font-bold text-typo-900 mb-2">Portfolio</h1>
          <label className="flex items-center gap-2 border border-gray-200 w-full p-3 rounded-md cursor-pointer">
            <img src={img} alt="upload icon" />
            <span className="font-manrope font-medium text-typo-900">
              {formValues.portfolio ? formValues.portfolio : "Upload Portfolio"}
            </span>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
        </div>
      </div>
    </form>
  );
};

export default PrivateMyProfile;
