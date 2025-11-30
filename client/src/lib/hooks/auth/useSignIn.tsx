import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

// api call
import { signInRequest } from "@/features/api/auth.api";

// types
import { ILoginSchema } from "@/types/user/sign-in";

interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

export const useSignIn = () => {
  return useMutation({
    mutationKey: ["register-user"],

    mutationFn: (data: ILoginSchema) => signInRequest(data),

    onSuccess: (data) => {
      console.log("✅ Registration successful:", data);
    },

    onError: (error: AxiosError<ApiErrorResponse>) => {
      if (error.response) {
        console.error("❌ Server error:", {
          status: error.response.status,
          data: error.response.data,
        });
      } else if (error.request) {
        console.error("❌ Network error: No response from server");
      } else {
        console.error("❌ Unexpected error:", error.message);
      }
    },
  });
};
