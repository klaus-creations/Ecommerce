import { apiClient } from "@/config/axios";

// NOTE: importing types
import type { IRegisterPayload } from "@/types/user/regitserUser";
import type { ILoginSchema } from "@/types/user/sign-in";

// Better Auth Api Calls
export const registrationrequest = async function (userdata: IRegisterPayload) {
  const res = await apiClient.post("/auth/sign-up/email", userdata);
  return res.data;
};

export const signInRequest = async function (userdata: ILoginSchema) {
  const res = await apiClient.post("/auth/sign-in/email", userdata);
  return res.data;
};

export const signOutRequest = async function () {
  const res = await apiClient.post("/auth/sign-out");
  return res.data;
};

export const googleOAuthRequest = async function () {
  const res = await apiClient.post("/auth/sign-in/social", {
    provider: "google",
    callbackURL: "http://localhost:3000/home",
    errorCallbackURL: "http://localhost:3000/error",
  });

  return res.data;
};
