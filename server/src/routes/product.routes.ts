import { Router } from "express";
import upload from "../middlewares/multer.js";

// NOTE: Product Controllers
import {
  createProduct,
  getAllProducts,
} from "../controllers/product.controller.js";

import { authorize } from "../middlewares/admin.middleware.js";

// Note: Product validations
import { productValidation } from "../validations/product.validation.js";
import { handleValidationErrors } from "../middlewares/validation.middleware.js";

const productRoute = Router();

productRoute.get("/", getAllProducts);
productRoute.post(
  "/new",
  upload.array("files", 6),
  productValidation,
  handleValidationErrors,
  authorize,
  createProduct
);

export default productRoute;
