import { body, ValidationChain } from "express-validator";

export const productValidation: ValidationChain[] = [
  body("name")
    .notEmpty()
    .withMessage("Product name is required")
    .isString()
    .withMessage("Product name must be a string")
    .isLength({ min: 3, max: 100 })
    .withMessage("Product name must be between 3 and 100 characters"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0.01 })
    .withMessage("Price must be a positive number"),

  body("stock")
    .notEmpty()
    .withMessage("Stock quantity is required")
    .isInt({ min: 0 })
    .withMessage("Stock must be an integer greater than or equal to 0"),

  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isString()
    .withMessage("Category must be a string"),

  body("images")
    .isArray({ min: 1 })
    .withMessage("At least one image is required"),

  body("images.*").isString().withMessage("Each image must be a string (URL)"),
];
