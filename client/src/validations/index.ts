import { z } from "zod";

export const signupValidations = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name cannot exceed 20 characters")
      .nonempty("Please enter your name"),
    email: z
      .string()
      .email("Please enter a valid email address")
      .min(3, "Email must be at least 3 characters")
      .nonempty("Please enter your email"),
    password: z
      .string()
      .min(6, "The password must be at least 6 characters")
      .max(20, "The password must be at most 20 characters")
      .nonempty("Please enter your password"),
    confirmPassword: z.string().nonempty("Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const signInValidations = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(3, "Email must be at least 3 characters")
    .nonempty("Please enter your email"),
  password: z
    .string()
    .min(6, "The password must be at least 6 characters")
    .max(20, "The password must be at most 20 characters")
    .nonempty("Please enter your password"),
});
