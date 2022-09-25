const product = require("../models/product");

exports.AddProduct = (req, res) => {
  const { name, image, price, category, quantity, menu } = req.body;
  product.create({
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
