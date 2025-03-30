import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";

import userModel from "../models/users.model.js";
import passport from "passport";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("All Fields are required");
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exists");
      (error as any).statusCode = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      throw new Error("User creation failed");
    }

    req.login(newUser, (err) => {
      if (err) {
        return next(err);
      }

      res.status(201).json({
        success: true,
        message: "User created and logged in successfully",
        data: {
          user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          },
        },
      });
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  passport.authenticate("local", (err: any, user: any, info: any) => {
    if (err) {
      res.status(500).json({ message: "Error logging in", error: err });
      return;
    }
    if (!user) {
      res.status(400).json({ message: info?.message });
      return;
    }

    req.logIn(user, (err) => {
      if (err) {
        res.status(500).json({ message: "Error logging in", error: err });
        return;
      }
      res.status(200).json({
        message: "succeess",
        data: { id: user._id, name: user.name, email: user.email },
      });
    });
  })(req, res);
};

export const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    req.logout((error) => {
      if (error) {
        throw new Error("something went wrong while logout");
      }
      res.status(204).send();
    });
  } catch (error) {
    next(error);
  }
};

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  res.status(200).json({
    success: true,
    data: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    },
  });
};
