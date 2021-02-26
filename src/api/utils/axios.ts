import axios from "axios";

export const axiosAgent = axios.create({
  withCredentials: true,
});
