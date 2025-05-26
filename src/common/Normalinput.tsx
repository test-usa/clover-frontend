const Normalinput = ({label,type}:{label:string, type:string}) => {
  return (
      <div>
        <label>{label}</label>
          <input
            type={type}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-[12px] shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
      </div>
  )
}

export default Normalinput;