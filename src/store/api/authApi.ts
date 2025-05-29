import axiosInstance from "./axiosInstance";

export const registerUserApi = async (userData: {
  email: string;
  password: string;
}) => {
  const res = await axiosInstance.post("/users/create-user", userData);
  return res.data;
};

// login user
export const loginUserApi = async (userData: {
  email: string;
  password: string;
}) => {
  const res = await axiosInstance.post("/auth/login", userData);
  return res.data;
};

// get user profile
export const getUserProfileApi = async (id: string) => {
  const res = await axiosInstance.get(`/profiles/${id}`);
  return res.data;
}


// otp
interface otp {
  otp: string;
  email: string;
}

export const otpVerifyApi = async (id: string, otpData: otp) => {
  const res = await axiosInstance.post(`/users/verify-email/${id}`, otpData);
  return res.data;
};
