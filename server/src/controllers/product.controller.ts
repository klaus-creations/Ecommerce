import { Request, Response, NextFunction } from "express";

import productModel from "../models/products.model";
import categoryModel from "../models/category.model";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { category } = req.body;

    const categoryId = await categoryModel.findById(category);

    if (!categoryId) {
      throw new Error("Category not Found with this Id");
    }

    const newProduct = await productModel.create({
      ...req.body,
    });

    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log(
      "Error happening while creating the product",
      error instanceof Error ? error.message : error
    );

    next(error);
  }
};

export const updateProduct = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};

export const deleteProduct = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};

export const getAllProducts = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const products = await productModel.find();

    if (!products) {
      throw new Error("Error while Gettting all products");
    }

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { productId } = req.params;

  try {
    const product = productModel.findById(productId);
    if (!product) {
      throw new Error("Cannot get the the product by itid");
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

export const getProductsByCategory = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { categoryId } = req.params;

  try {
    const category = categoryModel.findById(categoryId);
    if (!category) {
      throw new Error("Cannot get the category by it's Id");
    }

    const categoryProducts = productModel.find({ category: categoryId });
    if (!categoryProducts) {
      throw new Error("Erroe while getting products by it's category");
    }

    res.status(200).json({ success: true, data: categoryProducts });
  } catch (error) {
    next(error);
  }
};

export const searchProducts = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};

export const getFeaturedProducts = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};

export const getNewArrivals = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};

export const addProductReview = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};

export const getProductReviews = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};

export const deleteProductReview = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};

export const getRecommendedProducts = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};

export const filterProducts = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};
