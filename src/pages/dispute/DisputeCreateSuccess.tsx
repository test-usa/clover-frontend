import { generateRandomId } from "@/utils/utils";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const arrayInfo = [
  {
    id: generateRandomId(),
    title: "What happens next?",
    description: [
      "The SwapSpot admin team will now review the dispute, taking into consideration the statements and evidence provided by both you and Neha Mayumi.",
      "They will work towards a fair resolution.",
      "You will be notified of the outcome and any actions taken.",
      "This process helps ensure both parties are committed to completing the swap.",
      "5% of your fund will be charged for Platform fee."
    ]
  }
];

const DisputeCreateSuccess = () => {
  return (
    <div className="max-w-[660px] w-full mx-auto px-4 py-6 sm:py-10 md:py-14">
      <div className="flex flex-col gap-3 items-center text-center justify-center mb-6">
        <FaCircleCheck className="text-green-500 text-6xl sm:text-7xl" />
        <h1 className="text-xl sm:text-2xl font-semibold">
          Dispute Submitted Successfully!
        </h1>
        <p className="text-sm sm:text-base text-gray-700">
          Your dispute regarding the swap “Branding & Identity for Web Development” with Neha Mayumi has been submitted.
        </p>
      </div>

      {arrayInfo.map((item) => (
        <div key={item.id}>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
            {item.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex gap-3 mt-6">
        <Link to="/dashboard/swap-active-detail" className="flex-1">
          <button className="w-full border border-blue-400 py-2 rounded-md hover:bg-blue-50 transition cursor-pointer">
            View Swap Details
          </button>
        </Link>
        <Link to="/dashboard" className="flex-1">
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
            Go to Dashboard
          </button>
        </Link>
      </div>

    </div>
  );
};

export default DisputeCreateSuccess;
