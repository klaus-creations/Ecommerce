import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  listCategories,
} from "../controllers/category.controller";
import { categoryValidation } from "../validations/category.validation";
import { handleValidationErrors } from "../middlewares/validation.middleware";

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
