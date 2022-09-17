const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    carts: {
      type: Array,
    },
  },
  {
    timeStams: true,
    collection: "users",
  }
);

module.exports = mongoose.model("user", UserSchema);