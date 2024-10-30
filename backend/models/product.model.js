import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: trusted,
    },
    price: {
      type: Number,
      required: trusted,
    },
    image: {
      type: String,
      required: trusted,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
