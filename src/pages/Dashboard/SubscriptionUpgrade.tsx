import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import visaIcon from "../../assets/visa.svg";
import ssIcon from "../../assets/ss.svg";
import bcaIcon from "../../assets/bca.svg";

const SubscriptionUpgrade = () => {
  // Define plan type as union of valid keys
  type PlanType = 'monthly' | 'yearly';

  // State with narrowed type
  const [plan, setPlan] = useState<PlanType>('monthly');

  const planOptions: Record<PlanType, number> = {
    monthly: 20,
    yearly: 200,
  };

  const selectedAmount = planOptions[plan];

  return (
    <>
      <section className="border-b border-gray-300 py-8">
        <div>
          {/* Header */}
          <div className="flex flex-row gap-2 items-center px-6">
            <FaAngleLeft />
            <h1 className="text-2xl font-semibold text-typo-800">Upgrade Subscription</h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 flex flex-col gap-6 max-w-5xl">
        {/* 1. Title and Description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-typo-800">
            Unlock Premium Features
          </h1>
          <p className="text-typo-600">
            You're upgrading to a premium plan. Please make a payment to activate your subscription.
          </p>
        </div>

        {/* 2. Input for Amount */}
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="font-bold text-typo-700">
            Agreed Deposit Amount:
          </label>
          <input
            id="amount"
            type="number"
            className="border border-gray-300 rounded px-4 py-2 text-typo-800"
            value={selectedAmount}
            disabled
          />
        </div>

        {/* 3. Premium Benefits */}
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold text-typo-800">Premium Benefits:</h1>
          <ul className="list-disc list-inside text-typo-600 space-y-1">
            <li><strong>Boosted Listings:</strong> Your skill offers appear higher in search results.</li>
            <li><strong>Faster Matching:</strong> Get connected with potential swappers more quickly.</li>
            <li><strong>Priority Visibility:</strong> Stand out to users browsing skills.</li>
            <li><strong>Featured Skills:</strong> Showcase your skill offer at the top of search results.</li>
            <li><strong>Access to Exclusive Users:</strong> Connect with a curated group of highly-rated swappers.</li>
            <li><strong>No Platform Fee:</strong> You won’t be charged for the platform fee.</li>
          </ul>
        </div>

        {/* 5. Payment Method Selection */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-lg font-semibold text-typo-800">Select Payment Method</h1>
            <p className="text-primary-600 cursor-pointer">See all</p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { label: "Credit Card", icon: visaIcon },
              { label: "SwapSpot Wallet", icon: ssIcon },
              { label: "Bank Transfer (BCA)", icon: bcaIcon },
            ].map(({ label, icon }, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between px-4 py-3"
              >
                <div className="flex flex-row gap-3 items-center">
                  <img src={icon} alt={label} className="w-8 h-8" />
                  <h1 className="font-medium text-typo-700">{label}</h1>
                </div>
                <input type="radio" name="payment" className="w-5 h-5 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* 6. Total Payment Summary */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-lg font-semibold text-typo-800">Total Payment</h1>
            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value as PlanType)}
              className="border border-gray-300 rounded px-4 py-2 text-typo-800 mt-2"
            >
              
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div className="flex flex-row justify-between items-center text-typo-700">
            <h1>Subscription Fee</h1>
            <p>${selectedAmount.toFixed(2)} USD</p>
          </div>
        </div>

        <hr className="border-gray-500" />

        {/* 7. Footer with Details and Buttons */}
        <div className="grid grid-cols-2">
          <div>
            <h1 className="font-normal text-typo-500">Total Payment</h1>
            <p className="text-sm font-bold text-typo-600">${selectedAmount.toFixed(2)} USD</p>
          </div>
          <div className="w-full">
            <button className="px-6 py-2 bg-primary-600 text-white rounded-md w-full">
              Pay & Upgrade
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscriptionUpgrade;
