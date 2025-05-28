import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import logo from '../../assets/logo.svg'
import { Link, useNavigate } from "react-router-dom";
import registerImg from '../../assets/loginImage.png'
import { LuEye, LuEyeClosed } from "react-icons/lu";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm Password is required"),
  image: z.any().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});


type SignupFormInputs = z.infer<typeof signupSchema>;

const Signup = () => {
  // const [preview, setPreview] = useState<string | null>(null);
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isShow, setShow] = useState<boolean>(false)
  const [isShowConfirm, setShowConfirm] = useState<boolean>(false)


  const {
    register,
    handleSubmit,
    // setValue,
    watch,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();
  const passwordValue: string = watch("password")

  const onSubmit = (data: SignupFormInputs) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    // if (selectedFile) formData.append("image", selectedFile);

    console.log("Signup Data:", Object.fromEntries(formData));
    navigate("/login");
  };

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setPreview(URL.createObjectURL(file));
  //     setSelectedFile(file);
  //     setValue("image", file, { shouldValidate: true });
  //   }
  // };
  type PasswordStrength = {
    label: "Weak" | "Medium" | "Strong";
    score: number;
  };

  const getPasswordStrength = (password: string): PasswordStrength => {
    let score = 0;

    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    if (score <= 1) return { label: "Weak", score };
    if (score === 2) return { label: "Medium", score };
    return { label: "Strong", score };
  };


  return (
    <div className="flex items-center justify-center gap-[80px] min-h-screen bg-white px-4">
      <div className="hidden md:block">
        <img src={registerImg} alt="Login visual" className="" />
      </div>
      <div className="w-full max-w-md">
        <div className="flex flex-col justify-center items-center gap-6 mb-6">
          <img src={logo} alt="logo" className="w-[60px] h-[56px]" />
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h1 className="font-bold text-2xl">Join the SwapSpot <br /> Community</h1>
            <p className="text-sm text-[#3F3F46]">
              Unlock your potential by swapping skills with <br className="hidden sm:block" /> others.
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
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type={isShow ? 'text' : 'password'}
                placeholder="Enter your password"

                {...register("password")}
                className="w-full p-2  border border-[#D2D6DB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                onClick={() => setShow(!isShow)}
                className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
              >
                {isShow ? <LuEye /> : <LuEyeClosed />}
              </span>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
              {/* Password Strength Meter */}
              {passwordValue && (
                <div className="mt-2">
                  {(() => {
                    const strength = getPasswordStrength(passwordValue);

                    const colors = {
                      Weak: "bg-red-500",
                      Medium: "bg-yellow-500",
                      Strong: "bg-green-500",
                    };

                    return (
                      <>
                        <div className="w-full h-2 bg-gray-200 rounded">
                          <div
                            className={`h-2 rounded transition-all duration-300 ${colors[strength.label]}`}
                            style={{ width: `${(strength.score / 3) * 100}%` }}
                          ></div>
                        </div>
                        <p className={`text-sm mt-1 text-${strength.label === "Weak" ? "red" : strength.label === "Medium" ? "yellow" : "green"}-600`}>
                          Password Strength: {strength.label}
                        </p>
                      </>
                    );
                  })()}
                </div>
              )}

            </div>



            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type={isShowConfirm ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register("confirmPassword")}
                className="w-full p-2  border border-[#D2D6DB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                onClick={() => setShowConfirm(!isShowConfirm)}
                className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
              >
                {isShowConfirm ? <LuEye /> : <LuEyeClosed />}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
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
              className="w-full cursor-pointer bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:scale-105 transition"
            >
              <Link to={"/otp"}>Register</Link>
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
            <button className="w-full cursor-pointer bg-white border border-gray-300 text-[#254EDB] p-2 rounded-md hover:scale-105 transition">
              <div className="flex justify-center items-center gap-4">
                <FcGoogle />
                <p className="text-sm font-bold cursor-pointer">Continue with Google</p>
              </div>
            </button>

            <button className="w-full  cursor-pointer bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:scale-105 transition">
              <div className="flex justify-center items-center gap-4">
                <FaFacebook />
                <p className="text-sm font-bold cursor-pointer">Continue with Facebook</p>
              </div>
            </button>
          </div>

          {/* Footer Text */}
          <div className="my-4 text-center text-sm">
            <span>Already have an account? <Link to="" className="text-blue-700 hover:underline cursor-pointer">Sign in</Link></span>
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

export default Signup;
{/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
           
            <div
              className="relative w-full h-36 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center text-gray-500">
                  <CiSquarePlus className="h-12 w-12" />
                  <p className="text-sm">Click to upload</p>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              className="hidden"
              onChange={handleImageChange}
            />
            {errors.image?.message &&
              typeof errors.image.message === "string" && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
          </div> */}