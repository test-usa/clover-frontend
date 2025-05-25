const PricingCardEscrow = () => {
  return (
    <div className="max-w-sm w-full rounded-xl shadow-lg overflow-hidden p-8 text-center flex flex-col justify-between h-[457px] bg-[#A0B6EA]">
      <div className="upper">
        <h1 className="text-[36px] font-bold text-gray-800 mb-6">Our Simple Pricing</h1>
        <p className="text-gray-600 mb-8 text-[16px] font-medium">A small fee per successful swap.</p>
      </div>

      <div className="under">
        <div className="mb-8">
          <span className="text-4xl font-bold text-gray-900">5%</span>
          <span className="text-[16px] font-[500] text-gray-600">/of the Escrow amount</span>
        </div>

        <button className="bg-primary-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-md transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default PricingCardEscrow;