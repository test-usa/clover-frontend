import { Link } from "react-router-dom"

type TProps = {
    title:string;
    message:string;
    url:string;
}

const Success = ({title,message,url}:TProps) => {
  return (
    <div className="flex justify-center items-center lg:h-screen md:h-screen px-4 font-sans">
      <div className="w-full max-w-xl text-center space-y-6">
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-full p-4 inline-flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>

          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {title}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          {message}
        </p>

        <div className="space-y-4 pt-4">
          <div>
           <Link to={url}>
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white
                text-sm sm:text-base font-medium
                px-6 py-3 rounded-md shadow-sm transition duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              See Details
            </button></Link>
          </div>
          <div>
            <Link to='/dashboard'>
              <button
                type="button"
                className="w-full bg-white border-2 border-blue-600 text-blue-600
                  text-sm sm:text-base font-medium
                  px-6 py-3 rounded-md transition duration-200
                  hover:bg-blue-50 hover:text-blue-700
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                Go to dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success