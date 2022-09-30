const Bill = require("../models/bill");

exports.addBill = (req, res) => {
  const { name, coutry, adress, phone, city, email, carts } = req.body;
  Bill.create({
    name,
    coutry,
    adress,
    phone,
    city,
    email,
    carts,
  });
  res.status(200).json({
    success: true,
    data: req.body,
  });
  console.log("data:", req.body);
};
