import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/loginImage.png";
import logo from "../../assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { loginUserApi } from "@/store/api/authApi";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { verifyToken } from "@/utils/verifyToken";
import { useRedirectIfAuthenticated } from "@/hooks/useRedirectIfAuthenticated";
import axios from "axios";


const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type DecodedToken = {
  userId: string;
  iat: number;
  exp: number;
  role: string;
};

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  // useRedirectIfAuthenticated()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const user = useSelector((state: any) => state.auth);
  console.log("User from Redux:", user)

  const onSubmit = async (data: LoginFormInputs) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    console.log("Login Data:", data);

    try {
      const res = await loginUserApi(userData);
      if (res.data.accessToken) {
        Cookies.set("accessToken", res.data.accessToken, {
          expires: 7,
        });
      }

      if (res.success) {
        const decoded = verifyToken();

        if (decoded && typeof decoded !== "boolean") {
          const userId = (decoded as DecodedToken).userId;
          console.log("Decoded User ID:", userId);

          if (userId) {
            try {
              const profileRes = await axios.get(`https://clover-backend-lyh6.onrender.com/api/v1/profiles/${userId}`

              );
              console.log("Profile Data:", profileRes.data);

              // if (
              //   profileData?.phone === null ||
              //   profileData?.phone === undefined
              // ) {
              //   navigate("/on-board");
              // } else {
              //   navigate("/dashboard");
              // }
            } catch (err) {
              console.error("Profile fetch failed:", err);
              alert("Something went wrong fetching profile.");
            }
          } else {
            console.error("User ID not found in token.");
            alert("Login failed: Invalid token.");
          }
        } else {
          alert("Login failed: Invalid token.");
        }
      } else {
        alert(res.message || "Login failed. Please try again.");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      alert(
        error?.response?.data?.message ||
        "An unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-[80px] items-center justify-center min-h-screen bg-white px-4">
      <div className="hidden md:block">
        <img src={loginImg} alt="Login visual" />
      </div>

      <div className="w-full max-w-md">
        <div className="flex flex-col justify-center items-center gap-6 my-8">
          <img src={logo} alt="logo" className="w-[60px] h-[56px]" />
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h1 className="font-bold text-2xl">Welcome Back to SwapSpot!</h1>
            <p className="text-sm">
              Connect with a community ready to exchange{" "}
              <br className="hidden sm:block" />
              skills.
            </p>
          </div>
        </div>

        <div className="w-full bg-white p-6 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                {...register("email")}
                className="w-full p-2 border border-[#D2D6DB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="w-full p-2 border border-[#D2D6DB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-end -mt-2">
              <Link to="" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:scale-105 transition cursor-pointer"
            >
              Login
            </button>

            <div className="my-4 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <div className="w-full border-t border-gray-300" />
              <span>OR</span>
              <div className="w-full border-t border-gray-300" />
            </div>
          </form>

          <div className="space-y-4">
            <button className="w-full bg-white border border-gray-300 text-[#254EDB] p-2 rounded-md hover:scale-105 transition">
              <div className="flex justify-center items-center gap-4">
                <FcGoogle />
                <p className="text-sm font-bold cursor-pointer">
                  Continue with Google
                </p>
              </div>
            </button>

            <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:scale-105 transition">
              <div className="flex justify-center items-center gap-4">
                <FaFacebook />
                <p className="text-sm font-bold cursor-pointer">
                  Continue with Facebook
                </p>
              </div>
            </button>
          </div>

          <div className="my-4 text-center text-sm">
            <span>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-700 hover:underline">
                Register Now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
