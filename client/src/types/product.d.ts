import Review from "./review.d"
import ICategory from "./category.d"
export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  stock: number;
  category: ICategory;
  images: string[];
  ratings: number;
  reviews: Review[];
  likes: number;
  likedBy: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
