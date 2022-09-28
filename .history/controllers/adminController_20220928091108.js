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
