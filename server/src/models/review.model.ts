import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({});

const reviewModel = mongoose.model("Review", reviewSchema);

export default reviewModel;
