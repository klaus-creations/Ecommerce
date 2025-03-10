import { Router } from "express";

// NOTE: Product Controllers
import {
  createProduct,
  getAllProducts,
} from "../controllers/product.controller";

// Note: Product validations
import { productValidation } from "../validations/product.validation";
import { handleValidationErrors } from "../middlewares/validation.middleware";

const productRoute = Router();

productRoute.get("/", getAllProducts);
productRoute.post(
  "/new",
  productValidation,
  handleValidationErrors,
  createProduct
);

export default productRoute;
