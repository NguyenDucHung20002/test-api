const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    menu: {
      type: Number,
      require: true,
    },
  },
  {
    timeStams: true,
    collection: "products",
  }
);

module.exports = mongoose.model("product", ProductSchema);
