import { axiosAgent } from "./utils";
import { config } from "../config";

const AUTH_URL = `${config.BACKEND_URL}/auth/`;

export const checkOrRefreshAuth = async () => {
  return (await axiosAgent.post(AUTH_URL)).data;
};
