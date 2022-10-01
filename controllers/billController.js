const Bill = require("../models/bill");

exports.addBill = (req, res) => {
  const {
    userid,
    name,
    coutry,
    adress,
    phone,
    city,
    email,
    carts,
    total,
    datetime,
  } = req.body;
  Bill.create({
    userid,
    name,
    coutry,
    adress,
    phone,
    city,
    email,
    carts,
    total,
    datetime,
  });
  res.status(200).json({
    success: true,
    data: req.body,
  });
  console.log("data:", req.body);
};

exports.getAllBills = async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getABill = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    res.status(200).json(bill);
  } catch (err) {
    res.status(500).json(err);
  }
};
