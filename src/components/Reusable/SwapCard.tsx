
import { Link } from "react-router-dom";

// Define the possible statuses for the swap card
export type SwapStatus = "active" | "pending" | "completed";

export interface SwapCardProps {
    swapStatus: SwapStatus;
    offerSkill: string;
    exchangeSkill: string;
    withUser: string;

    timeRemaining?: string;

    reviewGiven?: number;
}

const SwapCard: React.FC<SwapCardProps> = ({
    swapStatus,
    offerSkill,
    exchangeSkill,
    withUser,
    timeRemaining,
    reviewGiven,
}) => {

    let cardTitle; // Using React.ReactNode to allow for JSX in title

    if (swapStatus === "active") {
        cardTitle = (
            <>
                <div className="flex w-full justify-between items-center mb-2">
                    <span> You are swapping </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {offerSkill}
                    </span>
                </div>
            </>
        );
    } else if (swapStatus === "pending") {
        cardTitle = (
            <>
                <div className="flex w-full justify-between items-center mb-2">
                    <span className="text-gray-600">{withUser} is offering</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {offerSkill}
                    </span>
                </div>
            </>
        );
    } else {
        cardTitle = ""; // For 'completed' status
    }

    return (
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 min-w-[350px] max-w-[400px]">
            {/* Card Title */}
            <h3 className="text-gray-700 text-base font-medium mb-3 flex items-center gap-2">
                {" "}
                {/* Added flex and items-center for alignment */}
                {cardTitle}
            </h3>

            {/* Skills Section - simplified for active/pending, specific for completed */}
            <div className="text-sm mb-4">
                {swapStatus !== "completed" && (
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">In exchange for</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {exchangeSkill}
                        </span>
                    </div>
                )}

                {swapStatus === "completed" && (
                    <>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">You swapped</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                {offerSkill}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">In exchange for</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                {exchangeSkill}
                            </span>
                        </div>
                    </>
                )}
            </div>

            {/* User and Dynamic Content */}
            <div className="text-sm mb-4">
                {/* 'With' user is only shown for active and completed states */}
                {(swapStatus === "active" || swapStatus === "completed") && (
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">With</span>
                        <span className="text-gray-800 font-medium">{withUser}</span>
                    </div>
                )}

                {/* Dynamic Content based on Status */}
                {swapStatus === "active" && timeRemaining && (
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Time Remaining</span>
                        <span className="text-red-500 font-semibold">{timeRemaining}</span>
                    </div>
                )}

                {swapStatus === "completed" && reviewGiven !== undefined && (
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Review Given</span>
                        <span className="text-gray-800 font-medium flex items-center">
                            <span className="text-orange-400 mr-1">★</span>
                            {reviewGiven.toFixed(1)}
                        </span>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-4 space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Link to={""}>View Details</Link>
                </button>

                {/* Dynamic Action Button and Icon */}
                {swapStatus === "active" && (
                    <>
                        <svg
                            className="w-5 h-5 text-blue-500 ml-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm0 7a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm0 7a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                            <Link to={""}>Respond to a Dispute</Link>
                        </button>
                    </>
                )}

                {swapStatus === "pending" && (
                    <>
                        <svg
                            className="w-5 h-5 text-blue-500 ml-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm0 7a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm0 7a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            <Link to={""}>Accept</Link>
                        </button>
                    </>
                )}

                {swapStatus === "completed" && (
                    <>
                        <svg
                            className="w-5 h-5 text-blue-500 ml-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm0 7a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm0 7a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            <Link to={""}>Review</Link>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default SwapCard;