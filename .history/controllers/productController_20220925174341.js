const Product = require("../models/product");

exports.AddProduct = (req, res) => {
  const { name, image, price, category, quantity, menu } = req.body;
  Product.create({
    name,
    image,
    price,
    category,
    quantity,
    menu,
  });
  //   console.log(name, email, password);
  res.status(200).json({
    success: true,
    data: req.body,
  });
  console.log("data:", req.body);
};

exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
