import { body, param, ValidationChain } from "express-validator";

export const reviewValidation: ValidationChain[] = [
  // body("user")
  //   .notEmpty()
  //   .withMessage("User ID is required")
  //   .isMongoId()
  //   .withMessage("Invalid User ID format"),

  param("productId")
    .notEmpty()
    .withMessage("Product ID is required")
    .isMongoId()
    .withMessage("Invalid Product ID format"),

  body("rating")
    .notEmpty()
    .withMessage("Rating is required")
    .isNumeric()
    .withMessage("Rating must be a number")
    .isFloat({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),

  body("comment")
    .notEmpty()
    .withMessage("Comment is required")
    .isLength({ min: 30, max: 300 })
    .withMessage("Comment must be between 30 and 300 characters"),
];
