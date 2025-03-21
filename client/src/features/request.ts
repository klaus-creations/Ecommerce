import { axiosInstanceRequest } from "./axios";

export const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await axiosInstanceRequest.post("/auth/sign-up", userData);
  return res.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const res = await axiosInstanceRequest.post("/auth/sign-in", credentials);
  return res.data;
};

export const getSession = async () => {
  const res = await axiosInstanceRequest.get("/auth/is-auth");
  return res.data;
};

export const logoutRequest = async () => {
  await axiosInstanceRequest.get("auth/logout");
};
