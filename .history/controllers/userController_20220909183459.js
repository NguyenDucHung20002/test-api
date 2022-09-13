const router = require("express").Router();

exports.login = (req, res) => {
  res.status(200).json({
    success: true,
  });
};
