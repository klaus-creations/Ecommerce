import { Router } from "express";
import {
  createUser,
  isAuthenticated,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller.js";
import {
  signInValidation,
  signupValidation,
} from "../validations/auth.validation.js";
import { handleValidationErrors } from "../middlewares/validation.middleware.js";
import { authorize } from "../middlewares/authorization.middleware.js";

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

authRouter.get("/logout", logoutUser);
authRouter.get("/is-auth", authorize, isAuthenticated);

export default authRouter;
