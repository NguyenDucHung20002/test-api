const router = require("express").Router();

exports.login = (req, res) => {
  const { name, email, password } = req.body;
  res.status(200).json({
    success: true,
  });
};
