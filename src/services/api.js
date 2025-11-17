import axios from "axios";
import { getToken, clearToken } from "../utils/auth";


const api = axios.create({
  baseURL: "https://93.127.194.118",
  timeout: 10000,
});


api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token?.accessToken) {
      config.headers["Authorization"] = `Bearer ${token?.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      clearToken();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
