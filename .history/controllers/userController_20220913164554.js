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
    data: req.body,
  });
  console.log("data:", req.body);
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    console.log(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.hello = (req, res) => {
  res.status(200).json({
    success: true,
    mes: "hollo",
  });
};
