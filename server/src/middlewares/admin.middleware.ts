import { Request, Response, NextFunction } from "express";

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
    const role = req?.user?.role;
    if (role === "USER") {
      throw new Error("you are not admin to do this");
    }
    next();
  } catch (error) {
    next(error);
  }
};
