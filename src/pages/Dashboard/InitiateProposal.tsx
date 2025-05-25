import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { AiOutlineClose, AiOutlineCalendar } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa6";

const dummySkills = ["Web Design", "SEO", "Frontend", "UI/UX", "Backend"];

function InitiateProposal() {
  const [offerSkills, setOfferSkills] = useState<string[]>([]);
  const [returnSkills, setReturnSkills] = useState<string[]>([]);
  const [offerInput, setOfferInput] = useState("");
  const [returnInput, setReturnInput] = useState("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [deposit, setDeposit] = useState<string>("");

  const offerInputRef = useRef<HTMLInputElement>(null);
  const returnInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const addSkill = (type: "offer" | "return", value: string) => {
    const skillList = type === "offer" ? offerSkills : returnSkills;
    const setSkillList = type === "offer" ? setOfferSkills : setReturnSkills;

    if (!skillList.includes(value)) {
      setSkillList([...skillList, value]);
    }
  };

  const removeSkill = (type: "offer" | "return", value: string) => {
    const setSkillList = type === "offer" ? setOfferSkills : setReturnSkills;
    const skillList = type === "offer" ? offerSkills : returnSkills;
    setSkillList(skillList.filter((skill) => skill !== value));
  };

  const filteredSuggestions = (input: string) =>
    dummySkills.filter(
      (skill) =>
        skill.toLowerCase().includes(input.toLowerCase()) && input.length > 0
    );

  const handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setDeposit(value);
    }
  };

  return (
    <>
      <section className="border-b py-8">
        <div>
          {/* Header */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-gray-800">Propose a Swap</h1>
          </div>

        </div>
      </section>
      <section className="flex flex-col items-start justify-start max-w-6xl">
        <div className="flex flex-col justify-start items-start  px-4 py-4">


          {/* Form Section */}
          <div className="flex flex-col space-y-6 mt-6 w-full max-w-5xl">
            {/* 1. Intro */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Create Your Proposal</h2>
              <p className="text-gray-600 mt-1">
                You're proposing a swap with <strong>Neha Mayumi</strong>
              </p>
            </div>

            {/* 2. Your Offer */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Offer</label>
              <div className="flex flex-wrap items-center gap-2 border rounded-md p-2 mb-2">
                {offerSkills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center bg-info-50 text-info-600 border border-info-200 rounded-3xl px-3 py-1 text-sm"
                  >
                    {skill}
                    <AiOutlineClose
                      onClick={() => removeSkill("offer", skill)}
                      className="ml-2 cursor-pointer text-sm"
                    />
                  </span>
                ))}
                <input
                  ref={offerInputRef}
                  type="text"
                  value={offerInput}
                  onChange={(e) => setOfferInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && offerInput.trim()) {
                      addSkill("offer", offerInput.trim());
                      setOfferInput("");
                    }
                  }}
                  className="flex-1 min-w-[150px] border-none focus:outline-none"
                  placeholder="Type a skill..."
                />
              </div>
              {filteredSuggestions(offerInput).length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {filteredSuggestions(offerInput).map((skill) => (
                    <button
                      key={skill}
                      className="text-sm px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
                      onClick={() => {
                        addSkill("offer", skill);
                        setOfferInput("");
                        offerInputRef.current?.focus();
                      }}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. What You Want in Return */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">What You Want in Return</label>
              <div className="flex flex-wrap items-center gap-2 border rounded-md p-2 mb-2">
                {returnSkills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center bg-primary-100 border-primary-50 text-primary-600 border rounded-3xl px-3 py-1 text-sm"
                  >
                    {skill}
                    <AiOutlineClose
                      onClick={() => removeSkill("return", skill)}
                      className="ml-2 cursor-pointer text-sm"
                    />
                  </span>
                ))}
                <input
                  ref={returnInputRef}
                  type="text"
                  value={returnInput}
                  onChange={(e) => setReturnInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && returnInput.trim()) {
                      addSkill("return", returnInput.trim());
                      setReturnInput("");
                    }
                  }}
                  className="flex-1 min-w-[150px] border-none focus:outline-none"
                  placeholder="Type a skill..."
                />
              </div>
              {filteredSuggestions(returnInput).length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {filteredSuggestions(returnInput).map((skill) => (
                    <button
                      key={skill}
                      className="text-sm px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
                      onClick={() => {
                        addSkill("return", skill);
                        setReturnInput("");
                        returnInputRef.current?.focus();
                      }}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Swap Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Swap Details</label>
              <textarea
                rows={4}
                className="w-full border rounded-md p-2"
                placeholder="Explain what this swap involves..."
              />
            </div>

            {/* 5. Swap Duration */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Swap Duration</label>
              <input
                type="text"
                value={selectedDate}
                readOnly
                placeholder="Select a date"
                className="w-full border rounded-md p-2 pr-10 cursor-pointer bg-white text-black"
                onClick={() => dateInputRef.current?.showPicker()}
              />
              <input
                ref={dateInputRef}
                type="date"
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  const formatted = date.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                  setSelectedDate(formatted);
                }}
                className="hidden"
              />
              <AiOutlineCalendar
                className="absolute right-3 top-[65%] -translate-y-1/2  cursor-pointer"
                onClick={() => dateInputRef.current?.showPicker()}
              />
            </div>

            {/* 6. Associated Deposit */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Associated Deposit</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={deposit}
                onChange={handleDepositChange}
                className="w-full border rounded-md p-2 appearance-none"
                placeholder="Enter deposit amount"
              />
            </div>

            {/* 7. Escrow Note */}
            <h1 className="text-sm text-gray-500 leading-relaxed">
              This deposit is held in escrow and returned to both parties upon successful swap completion. (5% Platform fee)
            </h1>

            <hr className="mt-12" />

            {/* 8. CTA */}
            <div className="flex justify-end">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Send Proposal
              </Button>
            </div>
          </div>
        </div>
      </section></>
  );
}

export default InitiateProposal;
