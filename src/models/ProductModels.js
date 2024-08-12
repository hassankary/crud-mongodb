import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", topicSchema);

export default ProductModel;
