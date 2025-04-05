import { Request, Response, NextFunction } from "express";
import productModel from "../models/products.model.js";
import userModel from "../models/users.model.js";
export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    const users = userModel.find({});


    if (!users) {
      throw new Error("Cannot get all users")
    }
    res.status(200).json({ message: true, data: users })
  } catch (error) {
    console.log(`error happening while getting all user ${(error as any).message || error}`)
    next(error)
  }
}


export const likeProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { productId } = req.body;
  const userId = req.user._id;

  try {
    if (!productId) {
      throw new Error("please provide product Id");
    }

    if (!userId) {
      throw new Error("please provide ur userid");
    }

    const product = await productModel.findById(productId);
    if (!product) {
      throw new Error("No product with this Id");
    }

    if (product.likedBy.includes(userId)) {
      throw new Error("You have already liked this product");
    }

    const updateLike = await productModel.findByIdAndUpdate(
      productId,
      { $inc: { likes: 1 }, $push: { likedBy: userId } },

      { new: true }
    );

    if (!updateLike) {
      throw new Error("Failed to update likes");
    }

    res.status(200).json({ likes: updateLike.likes });
  } catch (error) {
    next(error);
  }
};

export const rateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { };

export const addProductReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { };

export const removeProductReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { };

export const placeOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { };

export const cancelOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { };

export const orderHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { };
