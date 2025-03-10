import { body, ValidationChain } from "express-validator";

export const reviewValidation: ValidationChain[] = [
  body("name")
    .notEmpty()
    .withMessage("Product ID is required")
    .isLength({ min: 5, max: 35 }),

  body("rating")
    .notEmpty()
    .withMessage("Rating is required")
    .isNumeric()
    .withMessage("Rating must be a number")
    .isFloat({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),

  body("message")
    .notEmpty()
    .withMessage("Comment is required")
    .isLength({ min: 30, max: 500 })
    .withMessage("Message must be between 30 and 300 characters"),
];
