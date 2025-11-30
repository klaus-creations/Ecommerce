import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

// api call
import { googleOAuthRequest } from "@/features/api/auth.api";

interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

export const useGoogleOAuth = () => {
  return useMutation({
    mutationKey: ["google-oauth"],

    mutationFn: () => googleOAuthRequest(),

    onSuccess: (data) => {
      console.log("✅ Google OAuth started:", data);

      //If backend returns the oauth redirect URL:
       if (data?.redirect) {
         window.location.href = data.url;
       }
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
