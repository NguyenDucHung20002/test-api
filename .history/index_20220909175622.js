require("dotenv").config();

const express = require("express");
require("./connectMongo");

const app = express();
app.get((req, res) => {
  res.send("hello");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running on port: " + PORT);
});
