import { Request, Response, NextFunction } from "express";
import categoryModel from "../models/category.model";
import productModel from "../models/products.model";
import mongoose from "mongoose";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const data = req.body;
  try {
    const newCategory = await categoryModel.create({ ...data });

    if (!newCategory) {
      throw new Error("Error happened while creating the category");
    }

    res.status(201).json({
      success: true,
      data: newCategory,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { categoryId } = req.params;
  console.log(categoryId);

  try {
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      throw new Error("Enter the valid category id for mongodb");
    }
    const category = await categoryModel.findById(categoryId);

    if (!category) {
      throw new Error("Category not found");
    }

    await productModel.updateMany(
      { category: categoryId },
      { $set: { category: null } }
    );

    await categoryModel.findByIdAndDelete(categoryId);

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const listCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const categories = await categoryModel.find();

    if (!categories) {
      throw new Error("Error happened while retrieving all categories");
    }

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};
