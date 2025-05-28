import { generateRandomId } from "@/utils/utils";
import { Link } from "react-router-dom";

const arrayInfo = [
  {
    id: generateRandomId(),
    title: "Secure Your Swaps with Escrow",
    description: "Peace of mind for your valuable skill exchanges.",
  },
  {
    id: generateRandomId(),
    title: "What is Escrow?",
    description:
      "Escrow is a financial arrangement where a third party holds and regulates payment of the funds required for two parties involved in a transaction. It protects both the buyer and seller. In SwapSpot, it adds an extra layer of security to your skill trades, especially for higher value exchanges.",
  },
  {
    id: generateRandomId(),
    title: "How SwapSpot Escrow Works",
    description: [
      "Both parties agree to use Escrow for a swap.",
      "The agreed-upon value (or a portion) is held securely by SwapSpot.",
      "Both parties complete their agreed-upon skill services.",
      "Once both parties confirm completion, the funds are released.",
      "If a dispute arises, SwapSpot's dispute resolution process is initiated.",
    ],
  },
  {
    id: generateRandomId(),
    title: "Why Use Escrow?",
    description: [
      "• Security: Ensures funds are held until the service is completed.",
      "• Trust: Builds confidence between swappers who may not know each other.",
      "• Protection: Provides a process for resolving disagreements.",
      "• Peace of Mind: Reduces the risk of non-completion or payment issues.",
    ],
  },
  {
    id: generateRandomId(),
    title: "Escrow Fee",
    description:
      "A small fee is charged for using the SwapSpot Escrow service. This fee helps cover the costs of securely holding funds and managing the process, including dispute resolution if necessary. The specific fee will be clearly shown when you set up a swap using Escrow.",
  },
];

const Security = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 py-10 md:pl-[50px]">
        <div className="w-full max-w-2xl space-y-10">
          {arrayInfo.map(({ id, title, description }) => (
            <div key={id}>
              <h2 className="text-2xl md:text-[28px] font-semibold mb-2">
                {title}
              </h2>

              {Array.isArray(description) ? (
                title === "How SwapSpot Escrow Works" ? (
                  <ul className="list-decimal list-inside space-y-2 text-base text-gray-700">
                    {description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-2 text-base text-gray-700">
                    {description.map((item, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{item.split(":")[0]}:</span>{" "}
                        {item.split(":").slice(1).join(":").trim()}
                      </li>
                    ))}
                  </ul>
                )
              ) : (
                <p className="text-base text-gray-700 leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      
      <div className="w-full max-w-md bg-[#F3F4F6] my-14 py-6 px-6 sm:py-8 sm:px-10 mx-auto rounded-md">
        <div className="flex justify-center">
          <h1 className="text-xl sm:text-2xl font-semibold text-center">
            Ready to Start Swapping?
          </h1>
        </div>
        <Link to='/signup'>
        <button className="mt-6 mx-auto block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300">
          Join SwapSpot Today
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Security;
