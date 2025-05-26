import { Link } from "react-router-dom";

import messageIcon from "../../assets/messageIcon.svg";




export interface MatchCardProps {

    avatarSrc: string;

    name: string;

    rating: number;

    location: string;

    status: "Available" | "Busy";

    offerSkill: string;

    exchangeSkill: string;

    verifiedType?: "blue" | "orange" | "none";

}




const ReUsableCard: React.FC<MatchCardProps> = ({

    avatarSrc,

    name,

    rating,

    location,

    status,

    offerSkill,

    exchangeSkill,

    verifiedType,

}) => {

    const verifiedColor =

        verifiedType === "blue"

            ? "text-blue-500"

            : verifiedType === "orange"

                ? "text-[#F38744]"

                : "hidden";




    return (

        <div className="bg-white rounded-lg p-4 shadow-sm border min-w-[260px] max-w-[400px] border-gray-200">

            {/* User Info Section */}

            <div className="flex gap-2 items-center mb-4">

                {/* Avatar and Verified Badge */}

                <div className="relative">

                    {" "}

                    {/* Use relative positioning for the container */}

                    <img

                        src={avatarSrc}

                        alt={`${name}'s avatar`}

                        className="w-12 h-12 rounded-full mr-3 object-cover"

                    />

                    {verifiedType !== "none" && ( // Conditionally render the badge

                        <div>

                            <div

                                className={`absolute -top-1 right-2 w-5 h-5 ${verifiedColor}`}

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

                            <div className="flex absolute -bottom-2 -left-1 bg-[#FDEAD7] rounded-[100px] p-[2px] w-[56px] items-center text-xs text-gray-600 mt-1">

                                <span className="text-[#EF6820] mr-1">★</span>

                                {rating.toFixed(1)}(5)

                            </div>

                        </div>

                    )}

                </div>




                {/* Name, Location, Rating */}

                <div className="flex-1 text-start">

                    <h3 className="text-lg font-semibold text-gray-800 flex items-center">

                        {name}

                    </h3>




                    <p className="text-sm text-gray-500 flex items-center mt-1">

                        <svg

                            className="w-4 h-4 mr-1 text-gray-400"

                            fill="currentColor"

                            viewBox="0 0 20 20"

                            xmlns="http://www.w3.org/2000/svg"

                        >

                            <path

                                fillRule="evenodd"

                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"

                                clipRule="evenodd"

                            />

                        </svg>

                        {location}

                    </p>

                </div>




                {/* Status */}

                <div className="ml-auto">

                    <span

                        className={`px-3 py-1 rounded-full text-xs font-semibold ${status === "Available"

                            ? "bg-green-100 text-green-700"

                            : "bg-red-100 text-red-700"

                            }`}

                    >

                        {status}

                    </span>

                </div>

            </div>




            {/* Offer and Exchange Section */}

            <div className="mb-4">

                <div className="flex justify-between items-center mb-2">

                    <span className="text-gray-600 text-sm">I offer</span>

                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">

                        {offerSkill}

                    </span>

                </div>

                <div className="flex justify-between items-center">

                    <span className="text-gray-600 text-sm">In exchange for</span>

                    <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">

                        {exchangeSkill}

                    </span>

                </div>

            </div>




            {/* Actions Section */}

            <div className="flex justify-between space-x-3">

                <Link to={"/dashboard/profile/:id/public"} className="flex-1 px-4 flex items-center justify-center py-2 border border-blue-300 rounded-md text-gray-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">

                    <h1>View Profile</h1>

                </Link>

                <div className="flex gap-2">

                    <button className="cursor-pointer px-4 py-2 bg-white text-black rounded-md hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">

                        <img src={messageIcon} alt="Message icon" />

                    </button>

                    <Link to={"/dashboard/initiate-proposal"} className="px-6 flex items-center justify-center py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">

                        <h1>Swap</h1>

                    </Link>

                </div>

            </div>

        </div>

    );

};




export default ReUsableCard;