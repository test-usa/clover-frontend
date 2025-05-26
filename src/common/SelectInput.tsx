interface InputProps {
    options: string[];
    label?:string;
}

const SelectInput = ({ options,label }: InputProps) => {
    return (
        <div className="w-full mt-5 px-4 sm:px-6 md:px-0">
            {
                label && (
                    <h1>{label}</h1>
                )
            }
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <div className="relative flex-1">
                    <select
                        defaultValue=""
                        className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                    >
                        <option value="" disabled style={{ color: '#6B7280' }}>
                            {label ? `Select ${label}`:'Select Skills'}
                        </option>
                        {options.map((option) => (
                            <option key={option} value={option.toLowerCase().replace(/\s+/g, '-')} style={{ color: '#6B7280' }}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SelectInput;