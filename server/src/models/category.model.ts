import mongoose, { Document } from "mongoose";

interface ICategory extends Document {
  name: string;
  slug: string;
}

const categorySchema = new mongoose.Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

categorySchema.index({ name: 1 });

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;
