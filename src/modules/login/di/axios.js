import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://traveler-api-n420.onrender.com",
  // baseURL: "http://192.168.200.78:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
