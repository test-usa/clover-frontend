import CardWrapper from "@/components/DashboardBrowse/CardWrapper";
import InputWrapper from "@/components/DashboardBrowse/InputWrapper";
import SearchBox from "@/components/DashboardBrowse/SearchBox";

const Browse = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 mt-5">
      <div>
        <h1 className="text-3xl font-bold mb-3">Browse Swaps</h1>
        <hr className="text-[#D2D6DB]" />
      </div>
      {/* input wrapper */}
      <SearchBox />

      <InputWrapper />

      <CardWrapper />

    </div>
  );
};

export default Browse;
