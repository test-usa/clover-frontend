import { useState } from "react";
import SwapCard, { SwapCardProps } from "@/components/Reusable/SwapCards";

type TabType = "current" | "proposal" | "completed";

const dummyData: Record<TabType, SwapCardProps[]> = {
  current: [
    {
      swapping: "Web Design",
      inExchangeFor: "SEO Consulting",
      with: "Alex Johnson",
      timeRemaining: "3 days",
      variant: "current",
    },
    {
      swapping: "Logo Creation",
      inExchangeFor: "Video Editing",
      with: "Jordan Lee",
      timeRemaining: "5 days",
      variant: "current",
    },
  ],
  proposal: [
    {
      swapping: "Marketing Strategy",
      inExchangeFor: "Frontend Code Review",
      variant: "proposal",
    },
  ],
  completed: [
    {
      swapping: "UI/UX Design",
      inExchangeFor: "Content Writing",
      with: "Sam Doe",
      reviewGiven: 4.9,
      variant: "completed",
    },
  ],
};

const tabLabels: Record<TabType, string> = {
  current: "Current",
  proposal: "Proposals",
  completed: "History",
};

const sectionTitles: Record<TabType, string> = {
  current: "Your Ongoing Skill Exchanges",
  proposal: "Proposals That Are Awaiting a Response",
  completed: "See Your Completed Skill Exchanges",
};

const Swaps = () => {
  const [activeTab, setActiveTab] = useState<TabType>("current");

  const tabClass = (tab: TabType) =>
    `px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 border ${
      activeTab === tab
        ? "bg-white text-primary-500 border-primary-600"
        : " text-gray-700 hover:bg-gray-200 border-transparent"
    }`;

  return (
    <section className="p-4 sm:p-6 space-y-8">
      {/* Header + Tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Your Swaps</h1>
        <div className="flex flex-wrap gap-2 px-3 py-2 bg-primary-50 border-gray-200 border rounded-2xl" role="tablist">
          {(Object.keys(tabLabels) as TabType[]).map((tab) => (
            <button
              key={tab}
              className={tabClass(tab)}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              role="tab"
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>
      </div>

      {/* Section Title */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {sectionTitles[activeTab]}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300">
          {dummyData[activeTab].length > 0 ? (
            dummyData[activeTab].map((item, index) => (
              <SwapCard key={index} {...item} />
            ))
          ) : (
            <div className="col-span-full text-gray-500 italic">
              No swaps found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Swaps;
