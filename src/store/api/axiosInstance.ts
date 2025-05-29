import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://clover-backend-lyh6.onrender.com/api/v1",

  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include credentials (cookies) in requests
});
export default axiosInstance;
