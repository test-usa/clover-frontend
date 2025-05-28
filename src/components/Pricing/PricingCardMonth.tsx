import { Link } from "react-router-dom";

const features = [
  'Zero Swap Fee',
  'Boosted listings',
  'Faster matching',
  'Priority visibility'
];

const PricingCardMonth = () => {
  return (
    <div className="max-w-sm w-full rounded-xl shadow-lg overflow-hidden p-8 text-center flex flex-col justify-between h-[457px]  bg-[#FEF6EE]">
      <div className="upper">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Premium Membership</h1>
        <ul className="text-left pl-4">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-3 mb-2">
              <span className="w-[10px] h-[10px] bg-red-500 rounded-full flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="under">
        <div className="mb-8">
          <span className="text-4xl font-bold text-gray-900">$50</span>
          <span className="text-xl font-medium text-gray-600">/month</span>
        </div>

        <Link to='/dashboard/subscription-upgrade'>
          <button className="bg-warning-500 hover:bg-yellow-600 text-white font-bold py-3 px-20 rounded-md transition duration-200 cursor-pointer">
            Upgrade Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCardMonth;