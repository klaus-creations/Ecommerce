import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

// api call
import { signOutRequest } from "@/features/api/auth.api";

interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

export const useSignOut = () => {
  return useMutation({
    mutationKey: ["register-user"],

    mutationFn: () => signOutRequest(),

    onSuccess: (data) => {
      console.log("✅ SuccessFully Signout", data);
    },

    onError: (error: AxiosError<ApiErrorResponse>) => {
      // Server responded with error
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
