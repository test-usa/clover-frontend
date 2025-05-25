import { generateRandomId } from "@/utils/utils";

const infoArray = [
  {
    id: generateRandomId(),
    title: "Propose Your Trade",
    description:
      "Found someone with a skill you need? Send them a swap proposal. Clearly define what skill you will offer in exchange for theirs, the scope of work, timeline, and any other important details. You can also use the messaging system to discuss before proposing.",
  },
  {
    id: generateRandomId(),
    title: "Agree and Get Started",
    description:
      "The other user reviews your proposal. They can accept, decline, or suggest modifications. Once both parties agree on the terms, the swap is initiated. For added security, consider using the Escrow service for valuable trades.",
  },
  {
    id: generateRandomId(),
    title: "Perform the Service",
    description:
      "Once both parties are satisfied that the services are completed according to the agreement, they confirm completion on the platform. You can then leave a review and rating for the other user based on your experience. A small swap fee is processed upon successful completion.",
  },
  {
    id: generateRandomId(),
    title: "Confirm & Review",
    description:
      "Once both parties are satisfied that the services are completed according to the agreement, they confirm completion on the platform. You can then leave a review and rating for the other user based on your experience. A small swap fee is processed upon successful completion.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen ">
      <div className=" px-4 py-10 md:pl-[50px]">
        <div className=" w-full md:w-[668px] space-y-5">
          <div>
            <h1 className="text-xl md:text-3xl font-semibold mb-2 leading-snug">
              How SwapSpot Secures Your Swaps <br />
              with Escrow
            </h1>
            <p className="text-base text-gray-600">
              Connecting skills, creating value, one swap at a time.
            </p>
          </div>

          {infoArray.map((item) => {
            return (
              <div>
                <h2 className="sm:text-xl md:text-2xl font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-base text-gray-700">{item.description}</p>
              </div>
            );
          })}

          <div>
            <h2 className="sm:text-xl md:text-2xl font-semibold mb-2">
              Confirm & Review
            </h2>
            <p className="text-base text-gray-700">
              Once both parties are satisfied that the services are completed{" "}
              <br /> according to the agreement, they confirm completion on the
              platform. <br /> You can then leave a review and rating for the
              other user based on your <br />
              experience. A small swap fee is processed upon successful
              completion.
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

export default HowItWorks;
