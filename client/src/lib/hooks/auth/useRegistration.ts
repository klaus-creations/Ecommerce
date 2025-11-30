import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

// api call
import { registrationrequest } from "@/features/api/auth.api";

// types
import type { IRegisterPayload } from "@/types/user/regitserUser";

interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

export const useRegistration = () => {
  return useMutation({
    mutationKey: ["register-user"],

    mutationFn: (data: IRegisterPayload) => registrationrequest(data),

    onSuccess: (data) => {
      console.log("✅ Registration successful:", data);
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
