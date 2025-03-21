import axios from "axios";
import { CONFIG } from "../config/env";

export const axiosInstanceRequest = axios.create({
  baseURL: CONFIG.SERVER_URI,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
