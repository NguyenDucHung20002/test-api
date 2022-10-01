const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BillSchema = new Schema(
  {
    userid: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    coutry: {
      type: String,
      require: true,
    },
    adress: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    carts: {
      type: Array,
    },
    total: {
      type: Number,
    },
  },
  {
    timeStams: true,
    collection: "bills",
  }
);

module.exports = mongoose.model("bill", BillSchema);
