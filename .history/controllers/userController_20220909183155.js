const router = require("express").Router();

exports.login = (req, res) => {
  res.statues(200).json({
    success: true,
  });
};
