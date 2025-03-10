import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config/env";
import userModel from "../models/users.model";

// Extend Express Request Type
declare module "express" {
  interface Request {
    user?: any;
  }
}

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      throw new Error("un Authorized");
    }

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    if (typeof token !== "string") {
      throw new Error("token must be a string");
    }
    const decoded = jwt.verify(token, JWT_SECRET as string) as JwtPayload;

    if (!decoded || !decoded.userId) {
      throw new Error("un Authorized");
    }

    const user = await userModel.findById(decoded.userId);

    if (!user) throw new Error("un Authorized");

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
