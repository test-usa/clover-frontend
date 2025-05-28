import React from "react";
import { Button } from "@/components/ui/button";
import msg from "../../assets/msg.png";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export interface SwapCardProps {
  swapping: string;
  inExchangeFor: string;
  with?: string;
  timeRemaining?: string;
  reviewGiven?: number;
  variant: "current" | "proposal" | "completed";
}

const SwapCard: React.FC<SwapCardProps> = ({
  swapping,
  inExchangeFor,
  with: withWhom,
  timeRemaining,
  reviewGiven,
  variant,
}) => {
  const isProposal = variant === "proposal";
  const isCompleted = variant === "completed";
  const isCurrent = variant === "current";

  return (
    <div className="border rounded-lg p-8 border-gray-200 bg-white shadow-sm flex flex-col space-y-4">
      {/* 1. You are swapping */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1 className="font-semibold text-typo-600">You are swapping:</h1>
        <Button
          className="bg-info-50 text-info-600 border border-info-200 rounded-3xl"
          variant="outline"
          disabled={isCompleted}
        >
          {swapping}
        </Button>
      </div>

      {/* 2. In exchange for */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1 className="font-semibold text-typo-600">In exchange for</h1>
        <Button
          className="bg-info-50 text-info-600 border border-info-200 rounded-3xl"
          variant="outline"
          disabled={isCompleted}
        >
          {inExchangeFor}
        </Button>
      </div>

      {/* 3. With */}
      {!isProposal && withWhom && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h1 className="font-semibold text-typo-600">With</h1>
          <h1 className="text-typo-700">{withWhom}</h1>
        </div>
      )}

      {/* 4. Time Remaining */}
      {!isProposal && timeRemaining && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h1 className="font-semibold text-typo-600">Time Remaining</h1>
          <h1 className="text-danger-500">{timeRemaining}</h1>
        </div>
      )}

      {/* 5. Review (Star + Number) */}
      {isCompleted && reviewGiven !== undefined && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-typo-600">
          <div>
            <h1>Review Given</h1>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <AiFillStar className="text-yellow-500 w-4 h-4" />
            <span className="text-sm font-medium">{reviewGiven}</span>
          </div>
        </div>
      )}

      {/* 6. Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 gap-3">
        {/* View Details */}
        <div className="cursor-pointer">
        <Link to='/dashboard/swap-active-detail'>
          <Button className="text-primary-500 cursor-pointer" variant="outline">
            View Details
          </Button>
        </Link>
        </div>

        {/* Right side action buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Chat icon */}
          <Button className="cursor-pointer" variant="ghost" size="icon">
            <Link to='/dashboard/chat'>
            <img src={msg} alt="Chat" />
            </Link>
          </Button>

          {/* Ongoing swap: Request a Dispute */}
          {isCurrent && (
          <Link to='/dashboard/dispute-overlay'>
            <Button
              variant="destructive"
              className="bg-danger-500 text-typo-100 cursor-pointer"
            >
              Request a Dispute
            </Button>
          </Link>
          )}

          {/* Proposal: Accept */}
          {isProposal && (
           <Link to='/dashboard/confirm-accepting-proposal'>
            <Button variant="default" className="bg-primary-500 text-white">
              Accept
            </Button>
           </Link>
          )}

          {/* Completed: Review */}
          {isCompleted && (
           <Link to='/dashboard/review-proposal'>
            <Button
              variant="default"
              className="bg-primary-600 hover:bg-primary-700 text-white cursor-pointer"
            >
              Review
            </Button>
           </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwapCard;
