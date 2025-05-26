import { FaAngleLeft } from "react-icons/fa6";
import visaIcon from "../../assets/visa.svg";
import ssIcon from "../../assets/ss.svg";
import bcaIcon from "../../assets/bca.svg";

const ConfirmSendingProposal = () => {
  return (
    <>
      <section className="border-b border-gray-300 py-8">
        <div>
          {/* Header */}
          <div className="flex flex-row gap-2 items-center px-6">
            <FaAngleLeft />
            <h1 className="text-2xl font-semibold text-typo-800">Commit to Swap</h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 flex flex-col gap-6 max-w-5xl">
        {/* 1. Title and Description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-typo-800">
            Secure Your Swap with Neha Mayumi
          </h1>
          <p className="text-typo-600">
            You've Proposed a swap! The next step is to make a small escrow deposit to secure this swap.
          </p>
        </div>

        {/* 2. Escrow Description */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-typo-800">Escrow Deposit Required For</h1>
          <p className="text-typo-600">Branding & Identity for Web Development</p>
        </div>

        {/* 3. Input for Deposit Amount */}
        <div className="flex flex-col gap-2">
          <label htmlFor="deposit" className="font-medium text-typo-700">
            Agreed Deposit Amount
          </label>
          <input
            id="deposit"
            type="number"
            className="border border-gray-300 rounded px-4 py-2 text-typo-800"
            defaultValue={50}
          />
        </div>

        {/* 4. How Escrow Works */}
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold text-typo-800">How Escrow Works:</h1>
          <ul className="list-disc list-inside text-typo-600 space-y-1">
            <li>Both you and Neha Mayumi will make this deposit.</li>
            <li>
              The funds are held securely by SwapSpot and are not released to either party during the swap.
            </li>
            <li>
              Your deposit is automatically returned to you once both you and [Other User's Name] mark the
              completion.
            </li>
            <li>This process helps ensure both parties are committed to completing the swap.</li>
            <li>5% of your fund will be charged for Platform fee.</li>
          </ul>
        </div>

        {/* 5. Payment Method Selection */}
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-lg font-semibold text-typo-800">Select Payment Method</h1>
            <p className="text-primary-600 cursor-pointer">See all</p>
          </div>

          {/* Payment Options */}
          <div className="flex flex-col gap-3">
            {[
              { label: "Credit Card", icon: visaIcon },
              { label: "SwapSpot Wallet", icon: ssIcon },
              { label: "Bank Transfer (BCA)", icon: bcaIcon },
            ].map(({ label, icon }, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between  px-4 py-3"
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
          <h1 className="text-lg font-semibold text-typo-800">Total Payment</h1>
          <div className="flex flex-row justify-between items-center text-typo-700">
            <h1>Escrow Fee</h1>
            <p>$50.00 USD</p>
          </div>
        </div>

        {/* 7. Footer with Details and Buttons */}
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="font-semibold text-typo-800">Need Help?</h1>
            <p className="text-sm text-typo-600">Contact our support team anytime.</p>
          </div>
          <div className="flex flex-row gap-3">
            <button className="px-6 py-2 border border-gray-400 rounded-md text-typo-700">
              Cancel
            </button>
            <button className="px-6 py-2 bg-primary-600 text-white rounded-md">
              Confirm & Pay
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmSendingProposal;
