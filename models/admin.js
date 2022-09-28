const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema(
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
    permission: {
      type: Boolean,
      require: true,
    },
  },
  {
    timeStams: true,
    collection: "admins",
  }
);

module.exports = mongoose.model("admin", AdminSchema);
