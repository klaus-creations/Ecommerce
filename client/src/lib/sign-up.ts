import { authClient } from "@/lib/auth-client";
//import the auth client

const { data, error } = await authClient.signUp.email(
  {
    email,
    password,
    name,
    image,
    callbackURL: "/",
  },
  {
    onRequest: (ctx) => {
      //show loading
    },
    onSuccess: (ctx) => {
      //redirect to the dashboard or sign in page
    },
    onError: (ctx) => {
      // display the error message
      alert(ctx.error.message);
    },
  }
);
