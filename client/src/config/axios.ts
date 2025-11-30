import axios from "axios";
import { CONFIG } from "../config/env";

console.log("API Base URL:", CONFIG.SERVER_URI);

export const apiClient = axios.create({
  baseURL: CONFIG.SERVER_URI,
  timeout: 20000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
