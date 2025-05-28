import LocationInput from "./locationInput";
import SelectInput from "@/common/SelectInput";

export const skills: string[] = [
  "Graphic Design",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "UI/UX Design",
  "Content Writing",
  "Copywriting",
  "SEO Optimization",
  "Digital Marketing",
  "Video Editing",
  "Motion Graphics",
  "Photography",
  "Data Analysis",
  "Machine Learning",
];

const InputWrapper = () => {
  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col px-2">
          <h3 className="text-xl font-semibold mb-2">Skills You Want</h3>
          <SelectInput options={skills} />
        </div>

        <div className="flex flex-col px-2">
          <h3 className="text-xl font-semibold mb-2">Skills You Offer</h3>
          <SelectInput options={skills} />
        </div>

        <div className="flex flex-col px-2">
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <LocationInput />
        </div>

        <div className="flex flex-col px-2">
          <h3 className="text-xl font-semibold mb-2">Search By Status</h3>
          <SelectInput options={skills} />
        </div>
      </div>
    </div>
  );
};

export default InputWrapper;
