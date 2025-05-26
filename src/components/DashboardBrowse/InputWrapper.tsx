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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
                <h3 className="text-[16px] font-[500] mt-10">Skills You Want</h3>
                <SelectInput options={skills} />
            </div>
            <div>
                <h3 className="text-[16px] font-[500] mt-10">Skills You Offer</h3>
                <SelectInput options={skills} />
            </div>
            <div>
                <h3 className="text-[16px] font-[500] mt-10">Location</h3>
                <LocationInput />
            </div>
            <div>
                <h3 className="text-[16px] font-[500] mt-10">Search By Status</h3>
                <SelectInput options={skills} />
            </div>
        </div>
    )
}

export default InputWrapper