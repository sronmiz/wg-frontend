import axios from "axios";
import { config } from "../../config";

export const axiosAgent = axios.create({
  withCredentials: true,
});

const refreshToken = () => {
  const REFRESH_URL = `${config.BACKEND_URL}/auth/refresh`;
  return axios.post(REFRESH_URL);
};

axiosAgent.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      try {
        await refreshToken();
      } catch (error) {
        throw error;
      }
    }
  }
);
