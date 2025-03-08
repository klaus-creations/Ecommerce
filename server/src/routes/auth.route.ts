import { Router } from "express";
import {
  createUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller";
import {
  signInValidation,
  signupValidation,
} from "../validations/auth.validation";
import { handleValidationErrors } from "../middlewares/validation.middleware";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  signupValidation,
  handleValidationErrors,
  createUser
);

authRouter.post(
  "/sign-in",
  signInValidation,
  handleValidationErrors,
  loginUser
);

authRouter.post("/logout", logoutUser);

export default authRouter;
