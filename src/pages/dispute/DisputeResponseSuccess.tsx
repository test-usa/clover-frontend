import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DisputeResponseSuccess = () => {
  return (
    <div className="max-w-[660px] w-full mx-auto px-4 py-6 sm:py-10 md:py-14">
      <div className="flex flex-col gap-3 items-center text-center justify-center mb-6">
        <FaCircleCheck className="text-green-500 text-6xl sm:text-7xl" />
        <h1 className="text-xl sm:text-2xl font-semibold">
          Response Submitted Successfully!
        </h1>
        <p className="text-sm sm:text-base text-gray-700">
          Your dispute regarding the swap “Branding & Identity for Web Development” with Neha Mayumi has been submitted.
        </p>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">What happens next?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
          <li>
            The SwapSpot admin team will now review the dispute, taking into consideration the statements and evidence provided by both you and Neha Mayumi.
          </li>
          <li>They will work towards a fair resolution.</li>
          <li>You will be notified of the outcome and any actions taken.</li>
          <li>This process helps ensure both parties are committed to completing the swap.</li>
          <li>5% of your fund will be charged for Platform fee.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <Link to='/dashboard/swap-active-detail'>
          <button className="w-full sm:w-1/2 mx-auto border border-blue-400 py-2 rounded-md hover:bg-blue-50 transition">
            View Swap Details
          </button>
        </Link>
        <Link to='/dashboard'>
          <button className="bg-blue-500 text-white w-full sm:w-1/2 mx-auto py-2 rounded-md hover:bg-blue-700 transition">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DisputeResponseSuccess;
