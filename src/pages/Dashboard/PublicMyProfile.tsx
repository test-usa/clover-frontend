import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiChatVoiceLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaPassport } from "react-icons/fa";







const PublicMyProfile = () => {
  return <div>
    

    <div className="flex justify-between ">
      <div className="flex items-center  gap-2">
        <MdOutlineKeyboardArrowLeft className="text-3xl" />
<h1 className="text-3xl">Athalia Putri</h1>
      </div>
      <div className="flex  items-center gap-3">
        <RiChatVoiceLine className="text-4xl text-blue-400 "></RiChatVoiceLine>
      <button className="border bg-blue-600 text-white px-4 py-2 rounded-md">Swap</button>
      
<BsThreeDotsVertical className="text-3xl "></BsThreeDotsVertical>

      </div>
    
    </div>

    <hr className="text-gray-300 my-5" />
    
    
      <div className="flex gap-24 items-center">
       <div className="flex flex-col gap-2 ">
         <div className="relative ">
          <img className="h-[65px] w-[65px] rounded-full" src="https://i.pravatar.cc/100?img=1" alt="" />
           <div

                                className="absolute  top-1 left-12 w-5 h-5"
                            >

                                {" "}

                                {/* Position badge relative to avatar */}

                                <svg

                                    fill="currentColor"

                                    viewBox="0 0 20 20"

                                    xmlns="http://www.w3.org/2000/svg"

                                >

                                    <path

                                        fillRule="evenodd"

                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"

                                        clipRule="evenodd"

                                    />

                                </svg>

                            </div>


        </div>
        <h1 className="text-2xl font-semibold">Neha Mayumi</h1>
        <div className="flex items-center gap-2">
          <IoLocationOutline />
        <p> Los Angeles, USA</p>
        </div>
       </div>
       <div className="flex mt-16 gap-6" >
        <div>
        <h1 className=" font-semibold">Status</h1>
        <p>active</p>
       </div>
       <div>
        <h1 className=" font-semibold">Compleated Swap</h1>
        <p>07</p>
       </div>
       <div>
        <h1 className=" font-semibold">Average Rating</h1>
        <p>4.5</p>
       </div>
       </div>


      </div>

      <div>
        <h1 className=" font-semibold mt-6">Bio</h1>
        <p className="w-1/2">
          Creative graphic designer with 5+ years of experience specializing in branding and digital design. Passionate about clean aesthetics and effective visual communication. Eager to expand my skillset into web development to bring designs to life online.
        </p>
      </div>
      <div>
        <h1 className=" font-semibold mt-3">Skills Neha Offers</h1>
        <button className="text-blue-300 border-1 p-2 rounded-md mt-3"> Graphic Design </button>
      </div>
      <div>
        <h1 className=" font-semibold mt-3" >Skills Neha Wants</h1>
         <button className="text-blue-300 border-1 p-2 rounded-md mt-3"> web Development </button>

      </div>
      <div>
        <h1 className=" font-semibold mt-6" >Portfolio</h1>
         <button className=" border-1  border-gray-200 p-2 rounded-md mt-3 flex items-center gap-3"> <FaPassport></FaPassport> Visit Portfolio</button>

      </div>
      <div>
       <h1 className=" font-semibold mt-6"> Reviews for Neha Mayumi</h1>
       <div className="border-2 border-gray-100 w-[400px] p-4 rounded-md ">
        <div className="flex items-center gap-5">
          <img className="h-[65px] w-[65px] rounded-full" src="https://i.pravatar.cc/100?img=1" alt="" />
        <div>
            <h1 className="font-semibold">Eric Yates</h1>
          <p>Offers Web Development</p>
        </div>
        
       </div>
       <p className="mt-2">rating</p>
        <p className="my-2">"Alex did an amazing job on my new logo! Very professional, great communication, and delivered exactly what I envisioned. Highly recommend for graphic design swaps!"</p>
        <p>March 10, 2025</p>
       
       </div>
       
       
      </div>
  </div>;
};

export default PublicMyProfile;
