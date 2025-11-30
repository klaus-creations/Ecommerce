import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:5500/api/auth",
});


export const { useSession } = authClient;
