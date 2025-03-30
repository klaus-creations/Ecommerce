import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  listCategories,
} from "../controllers/category.controller.js";
import { categoryValidation } from "../validations/category.validation.js";
import { handleValidationErrors } from "../middlewares/validation.middleware.js";

const categoryRouter = Router();

categoryRouter.post(
  "/new",
  categoryValidation,
  handleValidationErrors,
  createCategory
);

categoryRouter.delete("/delete/:categoryId", deleteCategory);

categoryRouter.get("/", listCategories);
export default categoryRouter;
