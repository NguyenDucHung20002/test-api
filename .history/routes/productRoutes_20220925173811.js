const router = require("express").Router();

const { AddProduct } = require("../controllers/productController");

router.post("/AddProduct", AddProduct);

module.exports = router;
