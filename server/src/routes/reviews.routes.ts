import { Router } from "express";
import { addReview } from "../controllers/reviews.controller.js";
import { authorize } from "../middlewares/authorization.middleware.js";
import { reviewValidation } from "../validations/review.validation.js";
import { handleValidationErrors } from "../middlewares/validation.middleware.js";

const reviewsRouter = Router();

reviewsRouter.post(
  "/new/:productId",
  reviewValidation,
  handleValidationErrors,
  authorize,
  addReview
);

export default reviewsRouter;
