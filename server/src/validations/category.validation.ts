import { body, ValidationChain } from "express-validator";

export const categoryValidation: ValidationChain[] = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 5, max: 20 })
    .withMessage("Name must be at least 5 and at most 50 characters")
    .matches(/^[A-Za-z\s'-]+$/)
    .withMessage(
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  body("slug")
    .notEmpty()
    .withMessage("Email is required")
    .isLength({ min: 5, max: 20 })
    .withMessage("Name must be at least 5 and at most 50 characters")
    .matches(/^[A-Za-z\s'-]+$/)
    .withMessage(
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    ),
];
