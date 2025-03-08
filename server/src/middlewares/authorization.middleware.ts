import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { JWT_SECRET } from "../config/env.js";
import userModel from "../models/users.model.js";

// Extend Express Request Type
declare module "express" {
  interface Request {
    user?: any;
  }
}

export const authorize = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decoded = jwt.verify(token, String(JWT_SECRET)) as JwtPayload;

    if (!decoded || !decoded.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await userModel.findById(decoded.userId);

    if (!user) return res.status(401).json({ message: "Unauthorized" });

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
      error: error instanceof Error ? error.message : error,
    });
  }
};
