const Security = () => {
  return (
    <div className="min-h-screen">
      <div className=" px-4 py-10  md:pl-[50px]">
      <div className="w-[668px]  space-y-3 ">
  
        <div>
          <h1 className="text-3xl md:text-[36px] font-semibold mb-2">
            Secure Your Swaps with Escrow
          </h1>
          <p className="text-base text-gray-600">
            Peace of mind for your valuable skill exchanges.
          </p>
        </div>

       
        <div>
          <h2 className="text-2xl md:text-[28px] font-semibold mb-2">What is Escrow?</h2>
          <p className="text-base text-gray-700">
            Escrow is a financial arrangement where a third party holds and regulates <br /> payment of the funds required for two parties involved in a transaction. It protects both the buyer and seller. In SwapSpot, it adds an extra layer of security to your skill trades, especially for higher value exchanges.
          </p>
        </div>

       
        <div>
          <h2 className="text-2xl md:text-[28px] font-semibold mb-2">
            How SwapSpot Escrow Works
          </h2>
          <ul className="list-decimal list-inside space-y-1 text-base text-gray-700">
            <li>Both parties agree to use Escrow for a swap.</li>
            <li>The agreed-upon value (or a portion) is held securely by SwapSpot.</li>
            <li>Both parties complete their agreed-upon skill services.</li>
            <li>Once both parties confirm completion, the funds are released.</li>
            <li>If a dispute arises, SwapSpot's dispute resolution process is initiated.</li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-2xl md:text-[28px] font-semibold mb-2">Why Use Escrow?</h2>
          <ul className="space-y-2 text-base text-gray-700">
            <li>
              <span className="font-semibold">• Security:</span> Ensures funds are held until the service is completed.
            </li>
            <li>
              <span className="font-semibold">• Trust:</span> Builds confidence between swappers who may not know each other.
            </li>
            <li>
              <span className="font-semibold">• Protection:</span> Provides a process for resolving disagreements.
            </li>
            <li>
              <span className="font-semibold">• Peace of Mind:</span> Reduces the risk of non-completion or payment issues.
            </li>
          </ul>
        </div>

    
        <div>
          <h2 className="text-2xl md:text-[28px] font-semibold mb-2">Escrow Fee</h2>
          <p className="text-base text-gray-700">
            A small fee is charged for using the SwapSpot Escrow service. This fee helps cover the costs of securely holding funds and managing the process, including dispute resolution if necessary. The specific fee will be clearly shown when you set up a swap using Escrow.
          </p>
        </div>
      </div>
    </div>
      <div className="w-full max-w-md bg-[#F3F4F6] my-14 py-6 px-6 sm:py-8 sm:px-10 mx-auto rounded-md">
  <div className="flex justify-center">
    <h1 className="text-xl sm:text-2xl font-semibold text-center">
      Ready to Start Swapping?
    </h1>
  </div>
  <button className="mt-6 mx-auto block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300">
    Join SwapSpot Today
  </button>
</div>
    </div>
  );
};

export default Security;
