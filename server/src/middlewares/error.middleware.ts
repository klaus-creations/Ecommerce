import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  statusCode?: number;
  code?: number;
  errors?: Record<string, { message: string }>;
}

const errorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error: CustomError = { ...err };
  error.message = err.message || "Error occurred in the middleware";

  console.error(error);

  if (err.name === "CastError") {
    error = new Error("Resource not Found") as CustomError;
    error.statusCode = 404;
  }

  if (err.code === 11000) {
    error = new Error("Duplicate key error") as CustomError;
    error.statusCode = 400;
  }

  if (err.name === "ValidationError" && err.errors) {
    error = new Error(
      Object.values(err.errors)
        .map((val) => val.message)
        .join(", ")
    ) as CustomError;
    error.statusCode = 400;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

export default errorMiddleware;
