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

export const productValidations = z.object({
  name: z
    .string()
    .min(3, "Product name must be at least 3 characters")
    .max(50, "Product name cannot exceed 50 characters")
    .nonempty("Please enter the product name"),
  description: z
    .string()
    .max(500, "Description cannot exceed 500 characters")
    .optional(),
  price: z.number().min(0, "Price must be a positive number"),
  discountedPrice: z.number().optional(),
  stock: z.number().min(0, "Stock cannot be negative").default(0),
  category: z.string().nonempty("Please provide a valid category ID"),
  images: z
    .array(z.string().url("Each image must be a valid URL"))
    .min(1, "At least one image is required"),
  ratings: z
    .number()
    .min(0, "Ratings cannot be negative")
    .max(5, "Ratings cannot exceed 5")
    .default(0),
  reviews: z.array(z.string()).optional(),
  likes: z.number().min(0, "Likes cannot be negative").default(0),
  likedBy: z.array(z.string()).optional(),
});

export const addReviewValidations = z.object({
  rating: z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5")
    .nonnegative("Rating cannpt be negative"),

  review: z
    .string()
    .min(100, "Review must be at least 100 characters")
    .nonempty("Review is required"),
});
