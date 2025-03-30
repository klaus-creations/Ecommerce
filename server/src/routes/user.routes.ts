import { Router } from "express";
import {
  addProductReview,
  cancelOrder,
  likeProduct,
  orderHistory,
  placeOrder,
  removeProductReview,
} from "../controllers/user.controller.js";
import { authorize } from "../middlewares/authorization.middleware.js";

const userRouter = Router();

userRouter.post("/like", authorize, likeProduct);
userRouter.post("/add-review", addProductReview);
userRouter.post("remove-review", removeProductReview);
userRouter.post("/place-order", placeOrder);
userRouter.post("/cancel-order", cancelOrder);
userRouter.post("order-history", orderHistory);

export default userRouter;
