import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.category || mongoose.model("category", categorySchema);
export default Category;
