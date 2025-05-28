import { Button } from "@/components/ui/button";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
function ReviewProposal() {
  // Static values for demonstration
  const offerSkills = ["Frontend", "UI/UX"];
  const returnSkills = ["SEO", "Backend"];
  const swapDetails =
    "I'll redesign the homepage, improve its mobile responsiveness, and update the UI components.";
  const swapDate = "June 15, 2025";
  const deposit = "150";

  return (
    <>
    <section className="border-b py-8">
      <div>
        {/* Header */}
        <div className="flex flex-row gap-2 items-center">
          <FaAngleLeft />
          <h1 className="text-2xl font-semibold text-gray-800">Review Proposal</h1>
        </div>

      </div>
    </section>
    <section className="flex flex-col items-start justify-start max-w-6xl ">
      <div className="flex flex-col justify-start items-start   px-4 py-6">
        

        {/* Review Section */}
        <div className="flex flex-col space-y-6 mt-6 w-full max-w-5xl">
          {/* Intro */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Proposal From Neha Mayumi</h2>
            <p className="text-gray-600 mt-1">
              You're reviewing a swap proposal for <strong>Neha Mayumi</strong>
            </p>
          </div>

          {/* Your Offer */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Offer</label>
            <div className="flex flex-wrap items-center gap-2 p-2">
              {offerSkills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center bg-info-50 text-info-600 border border-info-200 rounded-3xl px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* What You Want in Return */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">What You Want in Return</label>
            <div className="flex flex-wrap items-center gap-2 p-2">
              {returnSkills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center bg-primary-50 text-primary-600 border border-primary-100 rounded-3xl px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Swap Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Swap Details</label>
            <div className=" p-3 text-gray-800 bg-gray-50 text-sm">
              {swapDetails}
            </div>
          </div>

          {/* Swap Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Swap Duration</label>
            <div className="flex items-center gap-2 text-primary-500 font-medium">
              <AiOutlineCalendar className="text-lg" />
              <span>{swapDate}</span>
            </div>
          </div>

          {/* Associated Deposit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Associated Deposit</label>
            <div className="w-full border rounded-md p-2 bg-gray-100 text-gray-800">
              ${deposit}
            </div>
          </div>

          {/* Escrow Note */}
          <h1 className="text-sm text-gray-500 leading-relaxed">
            This deposit is held in escrow and returned to both parties upon successful swap completion. (5% <br/> Platform fee)
          </h1>

          <hr className="mt-12" />

          {/* CTA */}
          <div className="flex justify-end gap-4">
            <Button className="text-danger-600 px-8 border border-danger-500 cursor-pointer">
              Decline
            </Button>
           <Link to='/dashboard/confirm-accepting-proposal'>
            <Button className="bg-primary-600 hover:bg-primary-700 text-white cursor-pointer">
              Accept Proposal
            </Button>
           </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default ReviewProposal;
