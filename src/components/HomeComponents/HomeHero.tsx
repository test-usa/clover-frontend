import React from "react";
import banner from "../../assets/banner.png";
import { FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const HomeHero: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-0 ">
      {/* Top H1 */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 leading-tight">
          The Skill Swap Marketplace!!!.
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <p className="text-base sm:text-lg text-gray-700 max-w-xl">
            Connect with creators, professionals, and learners to exchange
            services without the price tag.
          </p>

          {/* Search Bar with Right Icon */}
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="What skill are you looking for? or e.g., Logo Design, Copywriting, Language"
              className="pr-10 pl-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-500 w-full text-base"
            />
            <FiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={22}
            />
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-3 md:max-w-xl">
            <Button
              variant="outline"
              className="border-primary-500 bg-primary-50 text-primary-500 w-full sm:w-auto"
            >
              Find a Skill
            </Button>
            <Button
              variant="outline"
              className="border-primary-500 bg-primary-50 text-primary-500 w-full sm:w-auto"
            >
              Offer a Skill
            </Button>
            <Button
              variant="outline"
              className="border-primary-500 bg-primary-50 text-primary-500 w-full sm:w-auto"
            >
              Learn & Grow
            </Button>
          </div>
        </div>

        {/* Right Column - Banner */}
        <div className="flex justify-center md:justify-end">
          <img
            src={banner}
            alt="Banner"
            className="w-full  object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
