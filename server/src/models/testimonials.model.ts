import mongoose from "mongoose";

const testimonialsSchema = new mongoose.Schema({});

const testimonialsModel = mongoose.model("Testimonials", testimonialsSchema);

export default testimonialsModel;
