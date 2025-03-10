import { Router } from "express";
import { addReview } from "../controllers/reviews.controller";
import { authorize } from "../middlewares/authorization.middleware";
import { reviewValidation } from "../validations/review.validation";
import { handleValidationErrors } from "../middlewares/validation.middleware";

const reviewsRouter = Router();

reviewsRouter.post(
  "/new/:productId",
  reviewValidation,
  handleValidationErrors,
  authorize,
  addReview
);

export default reviewsRouter;
