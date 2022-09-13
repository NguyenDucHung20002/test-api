require("dotenv").config();

const express = require("express");
require("./connectMongo");

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());

const userRoutes = require("./routes/userRuotes");

app.get((req, res) => {
  res.send("hello");
});

app.use("/api", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running on port: " + PORT);
});
