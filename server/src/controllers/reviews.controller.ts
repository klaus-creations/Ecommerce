import { Request, Response, NextFunction } from "express";
import reviewModel from "../models/review.model.js";
import productModel from "../models/products.model.js";

export const addReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.user._id;
  const { productId } = req.params;
  const data = req.body;

  try {
    if (!userId) {
      throw new Error("please add the authorized user id");
    }

    if (!productId) {
      throw new Error("Product Id is Required");
    }

    const product = await productModel.findById(productId);
    console.log(product);
    if (!product) {
      throw new Error("Please enter the valid product id");
    }

    const review = await reviewModel.create({
      ...data,
      product: productId,
      user: userId,
    });

    if (!review) {
      throw new Error("Error happened while Creating the review for product");
    }

    res.status(201).json({ success: true, data: review });
  } catch (error) {
    next(error);
  }
};
