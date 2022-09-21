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

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.cart.push({
      id: 2,
      name: "haha",
    });
    await User.findByIdAndUpdate(req.params.id, user);
    await User.save();
    res.status(200).json(updateUser);
    console.log("thanh cong");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.hello = (req, res) => {
  res.status(200).json({
    success: true,
    mes: "hello",
  });
};
