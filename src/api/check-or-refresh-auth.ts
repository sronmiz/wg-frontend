import { axiosAgent } from "./utils";
import { config } from "../config";

const AUTH_URL = `${config.BACKEND_URL}/auth/`;
const REFRESH_URL = `${config.BACKEND_URL}/auth/refresh`;

export const checkOrRefreshAuth = async () => {
  try {
    return (await axiosAgent.post(AUTH_URL)).data;
  } catch (err) {
    return (await axiosAgent.post(REFRESH_URL)).data;
  }
};
