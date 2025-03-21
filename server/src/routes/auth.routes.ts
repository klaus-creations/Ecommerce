import { Router } from "express";
import {
  createUser,
  isAuthenticated,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller";
import {
  signInValidation,
  signupValidation,
} from "../validations/auth.validation";
import { handleValidationErrors } from "../middlewares/validation.middleware";
import { authorize } from "../middlewares/authorization.middleware";

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
