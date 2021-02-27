import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { config } from "../../config";

const agentConfig: AxiosRequestConfig = {
  withCredentials: true,
};

export const axiosAgent: AxiosInstance = axios.create(agentConfig);

const refreshToken = () => {
  const REFRESH_URL: string = `${config.BACKEND_URL}/auth/refresh`;
  return axios.post(REFRESH_URL);
};

axiosAgent.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      try {
        await refreshToken();
      } catch (error) {
        throw error;
      }
    }
  }
);
