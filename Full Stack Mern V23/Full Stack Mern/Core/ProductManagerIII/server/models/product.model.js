const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    productTitle: {
      type: String,
      required: [true, "the product title is required"],
    },
    productPrice: {
      type: Number,
      required: [true, "the product price is required"],
    },
    description: {
      type: String,
      required: [true, "the product description is required"],
    },
  },
  { timestamps: true }
);

const ProductSchema = mongoose.model("ProductSchema", Product);

module.exports = ProductSchema;
