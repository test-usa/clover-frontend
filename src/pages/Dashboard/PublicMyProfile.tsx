import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaPassport } from "react-icons/fa";

import img from "../../assets/chat.svg"

const reviews = [
  {
    id: 1,
    name: "Eric Yates",
    service: "Offers Web Development",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: "⭐⭐⭐⭐⭐", // Or use a star icon set
    comment:
      '"Alex did an amazing job on my new logo! Very professional, great communication, and delivered exactly what I envisioned. Highly recommend for graphic design swaps!"',
    date: "March 10, 2025"
  },
  {
    id: 2,
    name: "Sandra Morris",
    service: "Offers UI/UX Design",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: "⭐⭐⭐⭐", // Simulating a 4-star rating
    comment:
      '"“Swapped print design services with Alex. Smooth process, excellent quality work, and a pleasure to collaborate with. Will definitely swap again!”"',
    date: "April 22, 2025"
  }
];







const PublicMyProfile = () => {
  return <div className="py-4">


    <div className="flex justify-between ">
      <div className="flex items-center  gap-2">
        <MdOutlineKeyboardArrowLeft className="text-3xl" />

        <h1 className="text-[24px] font-mancope font-bold text-typo-900">Athalia Putri</h1>
      </div>
      <div className="flex  items-center gap-3">
        <img className="" src={img} alt="" />
        <button className="border bg-primary-500 text-white px-4 py-2 rounded-md">Swap</button>

        <BsThreeDotsVertical className="text-3xl "></BsThreeDotsVertical>

      </div>

    </div>

    <hr className="text-gray-300 my-5" />
    {/* another div */}

    <div className="p-4">
      <div className=" md:flex md:gap-24 md:items-center">
        <div className="">
          <div className="flex md:flex-col   gap-5 ">
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
            <div>
              <h1 className="text-[28px] font-mancope font-bold text-typo-900">Neha Mayumi</h1>
              <div className="flex items-center gap-2">
                <IoLocationOutline />
                <p> Los Angeles, USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:mt-20 mt-6 gap-6" >
          <div>
            <h1 className=" text-[16px] font-mancope font-bold text-typo-900">Status</h1>
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
        <h1 className=" text-[20px] font-mancope font-bold text-typo-900 mt-6">Bio</h1>
        <p className="md:w-1/2">
          Creative graphic designer with 5+ years of experience specializing in branding and digital design. Passionate about clean aesthetics and effective visual communication. Eager to expand my skillset into web development to bring designs to life online.
        </p>
      </div>
      <div className="md:max-w-4xl">
        <h1 className=" text-[20px] font-mancope font-bold text-typo-900  mt-3">Skills Neha Offers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border border-gray-200 p-4 rounded-md">
          {[
            "Graphic Design",
            "Logo Design",
            "Branding & Identity",
            "UI/UX Design (Visual)",
            "Adobe Creative Suite"
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 border border-info-50 p-2 rounded-md"
            >
              <span className="text-info-600 text-xs font-manrope font-medium">{skill}</span>

            </div>
          ))}
        </div>
      </div>
      <div className="md:max-w-4xl">
        <h1 className=" ftext-[20px] font-mancope font-bold text-typo-900  mt-3" >Skills Neha Wants</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border border-gray-200 p-4 rounded-md">
          {["Web Development", "React", "Responsive Design Implementation"].map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 border border-info-50 p-2 rounded-md"
            >
              <span className="text-info-600 text-xs font-manrope font-medium">{skill}</span>

            </div>
          ))}
        </div>

      </div>
      <div>
        <h1 className=" text-[20px] font-mancope font-bold text-typo-900 mt-6" >Portfolio</h1>
        <button className=" border border-gray-200 p-2 rounded-md mt-3 flex items-center gap-3"> <FaPassport></FaPassport> Visit Portfolio</button>

      </div>
      <div>
        <h1 className="text-[20px] font-manrope font-bold text-typo-900 mt-6 mb-5">
          Reviews for Neha Mayumi
        </h1>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {reviews.map((review) => (
    <div
      key={review.id}
      className="border-2 border-gray-100 p-4 rounded-md flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-5">
          <img
            className="h-[65px] w-[65px] rounded-full"
            src={review.avatar}
            alt={review.name}
          />
          <div>
            <h1 className="font-semibold">{review.name}</h1>
            <p className="text-gray-600 text-sm">{review.service}</p>
          </div>
        </div>
        <p className="mt-2 text-yellow-500 text-sm">{review.rating}</p>
        <p className="my-2 text-[15px] text-gray-800">{review.comment}</p>
      </div>
      <p className="text-[13px] text-gray-500 mt-4">{review.date}</p>
    </div>
  ))}
</div>

      </div>

    </div>
  </div>;
};

export default PublicMyProfile;
