import mongoose from "mongoose";

const categorySchema = new mongoose.Schema();

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;
