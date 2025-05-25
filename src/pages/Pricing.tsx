import PricingCardEscrow from "@/components/Pricing/PricingCardEscrow";
import PricingCardMonth from "@/components/Pricing/PricingCardMonth";
import AuthButton from "@/components/Reusable/AuthButton";
import ReUsableCard from "@/components/Reusable/ReUsableCard";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Our Simple Pricing
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the plan that best fits your skill-swapping journey.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 mb-16">
        <div className="w-full max-w-md">
          <PricingCardEscrow />
        </div>
        <div className="w-full max-w-md">
          <PricingCardMonth />
        </div>
      </div>

      {/* Escrow CTA */}
      <div className="bg-gray-50 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Secure Your Trades with Escrow
          </h2>
          <p className="text-base text-gray-600 mb-6 sm:mb-8 sm:text-center">
            For high-value trades, we recommend using our secure escrow service. A small fee applies for using this service, ensuring peace of mind for both parties.
          </p>
          <div className="flex justify-center">
            <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-8 sm:py-3 sm:px-10 rounded-md transition duration-200 text-sm sm:text-base">
              Learn About Escrow
            </button>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Pricing;

