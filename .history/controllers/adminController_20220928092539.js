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
