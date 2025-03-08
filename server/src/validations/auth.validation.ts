import { body, ValidationChain } from "express-validator";

export const signupValidation: ValidationChain[] = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 5, max: 50 })
    .withMessage("Name must be at least 5 and at most 50 characters")
    .matches(/^[A-Za-z\s'-]+$/)
    .withMessage(
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 50 })
    .withMessage(
      "Password length must be at least 8 and at most 50 characters"
    ),
];

export const signInValidation: ValidationChain[] = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 50 })
    .withMessage(
      "Password length must be at least 8 and at most 50 characters"
    ),
];
