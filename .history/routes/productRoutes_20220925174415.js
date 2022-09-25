const router = require("express").Router();

const {
  AddProduct,
  getAllProduct,
} = require("../controllers/productController");

router.post("/AddProduct", AddProduct);
router.get("/getAllProduct", getAllProduct);

module.exports = router;
