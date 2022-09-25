const router = require("express").Router();

const {
  AddProduct,
  getAllProducts,
  getAProduct,
} = require("../controllers/productController");

router.post("/AddProduct", AddProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getAProduct/:id", getAProduct);

module.exports = router;
