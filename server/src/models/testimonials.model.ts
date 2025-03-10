import mongoose, { Document, Schema } from "mongoose";

interface ITestimonial extends Document {
  name: string;
  message: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const testimonialSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

const testimonialsModel = mongoose.model<ITestimonial>(
  "Testimonial",
  testimonialSchema
);

export default testimonialsModel;
