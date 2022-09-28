const admin = require("../models/admin");
const Admin = require("../models/admin");

exports.AdminRegister = (req, res) => {
  const { name, email, password, permission } = req.body;
  Admin.create({
    name,
    email,
    password,
    permission,
  });
  //   console.log(name, email, password);
  res.status(200).json({
    success: true,
    data: req.body,
  });
  console.log("data:", req.body);
};

exports.getAllAdmin = async (req, res) => {
  try {
    const users = await Admin.find();
    res.status(200).json(users);
    console.log(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("sucsess");
    console.log("thanh cong");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAAdmin = async (req, res) => {
  try {
    const user = await Admin.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json("sucsess");
    console.log("thanh cong");
  } catch (err) {
    res.status(500).json(err);
  }
};
