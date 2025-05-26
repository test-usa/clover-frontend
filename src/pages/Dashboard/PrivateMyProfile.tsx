import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const PrivateMyProfile = () => {
   const [isOn, setIsOn] = useState(false);
  return <div>
    
        <div className="flex justify-between ">
          <div className="flex items-center  gap-2">
            <MdOutlineKeyboardArrowLeft className="text-3xl" />
    <h1 className="text-3xl">My Profile</h1>
          </div>
          <div className="flex  items-center gap-3">
           
          <button className="border border-gray-200 px-4 py-2 rounded-md">Preview</button>
          <button className="border border-gray-200 bg-gray-300 px-4 py-2 rounded-md">Save</button>
        
          
    
    
          </div>
        
        </div>
         <hr className="text-gray-300 my-5" />

         <div>
                    <img className="h-[65px] w-[65px] rounded-full" src="https://i.pravatar.cc/100?img=1" alt="" />
                    <div className="mt-3">
                      <h1 className="text-xl font-semibold">Profile Photo</h1>
                      <div className="flex gap-3 items-center mt-3">
                        <button className="border border-gray-200 px-2 py-1 rounded-md">Upload Photo</button>
                        <p>JPG, PNG, Max 2MB</p>
                      </div>

                    </div>
                    <div className="flex items-center justify-between">
                      <div className="mt-3">
                        <h1 className="text-xl font-semibold">Status</h1>
                        <div className="flex items-center gap-4 mt-2">
                        
                         <button
      onClick={() => setIsOn(!isOn)}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : ""
        }`}
      />
    </button>
    <p>Available</p>


                      </div>
                      </div>
                      <div className="mt-3">
                        <h1 className="text-xl font-semibold">Verification</h1>
                      <div className="flex gap-3">
                         <p className="text-green-400">verified</p>
                        <button> Verify Identity</button>
                      </div>
                      </div>
                      <div>

                      </div>
                    </div>
                    <div className="flex gap-6 mt-3">
                      <div>
                        <h1 className="font-semibold mb-2">Full Name</h1>
                       <h3 className="border border-gray-200 w-[350px] p-2 rounded-md">James David</h3>
                      </div>
                      <div>
                        <h1 className="font-semibold mb-2">Location</h1>
                       <h3 className="border border-gray-200 w-[350px]  p-2 rounded-md">James David</h3>
                      </div>
                    </div>

                    <div className="mt-3">
                      <h1 className="font-semibold mb-2" >Bio</h1>
                      <p className="border border-gray-200 p-5 w-[700px] rounded-md"> Creative graphic designer with 5+ years of experience specializing in branding and digital design. Passionate about clean aesthetics and effective visual communication. Eager to expand my skillset into web development to bring designs to life online.</p>
                    </div>
                    <div className="mt-3">
                      <h1 className="font-semibold mb-2" >Skills I Offer</h1>
                      <p className="border border-gray-200 p-5 w-[700px] rounded-md">
                         <button className="text-blue-300 border-1 p-2 rounded-md "> web Development </button>
                      </p>
                    </div>
                    <div className="mt-3">
                      <h1 className="font-semibold mb-2" >Skills I want</h1>
                      <p className="border border-gray-200 p-5 w-[700px] rounded-md">
                         <button className="text-blue-300 border-1 p-2 rounded-md "> web Development </button>
                      </p>
                    </div>
                    <div className="mt-3">
                      <h1 className="font-semibold mb-2" >Portfolio</h1>
                      <p className="border border-gray-200 w-[300px] p-3 rounded-md">Portfolio</p>
                  
                    </div>


         </div>



  </div>;
};

export default PrivateMyProfile;
