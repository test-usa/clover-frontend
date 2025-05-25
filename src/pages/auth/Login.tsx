import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import loginImg from '../../assets/loginImage.png'
import logo from '../../assets/logo.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row gap-[80px] items-center justify-center min-h-screen bg-white px-4">
      {/* Left Side Image - hidden on mobile */}
      <div className="hidden md:block">
        <img src={loginImg} alt="Login visual" className="" />
      </div>

      {/* Right Side Form */}
      <div className="w-full max-w-md">
        <div className="flex flex-col justify-center items-center gap-6 mb-6">
          <img src={logo} alt="logo" className="w-[60px] h-[56px]" />
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h1 className="font-bold text-2xl">Welcome Back to SwapSpot!</h1>
            <p className="text-sm">
              Connect with a community ready to exchange <br className="hidden sm:block" />
              skills.
            </p>
          </div>
        </div>

        <div className="w-full bg-white p-6 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                {...register("email")}
                className="w-full p-2 border border-[#D2D6DB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="w-full p-2 border border-[#D2D6DB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="flex justify-end -mt-2">
              <Link to="" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:scale-105 transition"
            >
              Login
            </button>

            {/* OR Divider */}
            <div className="my-4 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <div className="w-full border-t border-gray-300" />
              <span>OR</span>
              <div className="w-full border-t border-gray-300" />
            </div>
          </form>

          {/* Social Buttons */}
          <div className="space-y-4">
            <button className="w-full bg-white border border-gray-300 text-[#254EDB] p-2 rounded-md hover:scale-105 transition">
              <div className="flex justify-center items-center gap-4">
                <FcGoogle />
                <p className="text-sm font-bold">Continue with Google</p>
              </div>
            </button>

            <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:scale-105 transition">
              <div className="flex justify-center items-center gap-4">
                <FaFacebook />
                <p className="text-sm font-bold">Continue with Facebook</p>
              </div>
            </button>
          </div>

          {/* Footer Text */}
          <div className="my-4 text-center text-sm">
            <span>Already have an account? <Link to="" className="text-blue-700 hover:underline">Sign in</Link></span>
          </div>
          <div className="text-center text-xs text-gray-500">
            <p>
              By signing up or logging in, I accept the app’s{" "}
              <Link to="" className="text-blue-700 hover:underline">Terms of Service</Link> and{" "}
              <Link to="" className="text-blue-700 hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Login;

