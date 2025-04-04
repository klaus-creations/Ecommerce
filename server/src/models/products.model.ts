import mongoose, { Document, Schema } from "mongoose";

interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  discountedPrice?: number;
  stock: number;
  category: mongoose.Types.ObjectId;
  images: string[];
  ratings: number;
  reviews: mongoose.Types.ObjectId[];
  likes: number;
  likedBy: mongoose.Types.ObjectId[];
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    discountedPrice: {
      type: Number,
      validate: {
        validator: function (this: IProduct, value: number) {
          return value ? value <= this.price : true;
        },
        message: "Discounted price cannot be greater than the regular price.",
      },
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: [0, "Stock cannot be negative"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    images: [{ type: String }],
    ratings: { type: Number, default: 0, min: 0, max: 5 },
    reviews: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Review",
      default: [],
    },
    likes: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const productModel = mongoose.model<IProduct>("Product", productSchema);

export default productModel;
