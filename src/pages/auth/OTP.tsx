import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OTP: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [timer, setTimer] = useState<number>(59); // Initial timer for 59 seconds
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);

  const inputRefs = useRef<HTMLInputElement[]>([]);
 const navigate = useNavigate()

  const isOtpComplete = otp.every(digit => digit !== '' && !isNaN(Number(digit)));

  // useEffect for the countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timer > 0) {

      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      // When timer reaches 0, enable the resend button
      setIsResendDisabled(false);
    }
    return () => {
      if (interval) {
        clearInterval(interval); // Clear the interval to prevent memory leaks
      }
    };
  }, [timer]);

  // Handles input changes for each OTP digit field
  const handleChange = (element: HTMLInputElement, index: number) => {
    // Prevent non-numeric input
    if (isNaN(Number(element.value))) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Automatically focus the next input field if the current one has a value
    if (element.nextSibling && element.value !== '') {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {

    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {

      inputRefs.current[index - 1].focus();
    }
  };

  // Handles pasting of OTP
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {

    const pasteData = e.clipboardData.getData('text').slice(0, 6);
    // Only proceed if pasted data consists of only numbers
    if (!/^\d+$/.test(pasteData)) {
      return;
    }

    // Split pasted data into individual characters and update OTP state
    const newOtp = pasteData.split('');

    setOtp(newOtp.concat(new Array(6 - newOtp.length).fill('')));


    const lastFilledIndex = newOtp.length > 0 ? newOtp.length - 1 : 0;

    if (inputRefs.current[lastFilledIndex]) {
      inputRefs.current[lastFilledIndex].focus();
    }
  };

  // Handles the "Resend Code" action
  const handleResendCode = () => {
    console.log('Resending OTP...');
    setTimer(59);
    setIsResendDisabled(true);
    setOtp(new Array(6).fill(''));


    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  };

  // Handles the "Continue" action
  const handleContinue = () => {
    const fullOtp = otp.join('');

    if (fullOtp.length === 6) {
      // send the OTP to your backend for verification
      console.log('Verifying OTP:', fullOtp);
      alert(`OTP Entered: ${fullOtp}`); // For demonstration purposes
      // successful verification, navigate the user to the next page
      // navigation need
      navigate("/login")
    } else {

      alert('Please enter a 6-digit OTP.');
    }
  };

  // Dummy email for display purposes
  const userEmail = "your.email@example.com";

  return (
    <div className='w-10/12 mx-auto min-h-screen'>
      <div className="md:my-[80px] my-[20px] border-b  border-b-gray-100 w-full py-4">
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="  bg-white flex flex-col  items-center p-4">
        {/* Back button positioned absolutely */}


        {/* Main OTP verification card */}
        <div className="bg-white p-8 rounded-lg w-full max-w-sm text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">OTP Code Sent</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Enter the 6-digit that we have sent to <br />
            <span className="font-semibold text-gray-800">{userEmail}</span>
          </p>

          {/* OTP input fields */}
          <div className="flex justify-center space-x-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1} // Only one character per input
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                // Assign ref to each input element for direct DOM manipulation (e.g., focus)
                ref={(el: HTMLInputElement | null) => {
                  // Ensure el is not null before assigning
                  if (el) {
                    inputRefs.current[index] = el;
                  }
                }}
                className="w-10 h-10 text-center text-xl font-bold border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 outline-none transition duration-150 ease-in-out"
              />
            ))}
          </div>

          {/* Timer display */}
          <div className="flex items-center justify-center text-gray-500 mb-6 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.293 2.293a1 1 0 001.414-1.414L11 10.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>00:{timer < 10 ? `0${timer}` : timer}</span> {/* Format timer to "00:XX" */}
          </div>

          {/* Resend Code button */}
          <button
            onClick={handleResendCode}
            disabled={isResendDisabled} // Disabled based on timer
            className={`text-blue-500 text-sm font-medium cursor-pointer${isResendDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-600'
              } mb-4`}
          >
            Resend Code
          </button>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!isOtpComplete}
            className={`w-full bg-blue-500 text-white py-2 rounded-md cursor-pointer ${!isOtpComplete
              ? 'opacity-50 cursor-not-allowed' // Styles for disabled state
              : 'hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' // Styles for enabled state
              } transition duration-150 ease-in-out`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>

  );
};

export default OTP;