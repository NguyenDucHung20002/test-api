const router = require("express").Router();
const User = require("../models/user");

exports.login = (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  res.status(200).json({
    success: true,
  });
};

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  User.create({
    name,
    email,
    password,
  });
  //   console.log(name, email, password);
  res.status(200).json({
    success: true,
  });
};

exports.register = (req, res) => {
  res.status(200).json("hello");
};
