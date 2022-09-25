const router = require("express").Router();

const {
  AddProduct,
  getAllProduct,
  getAProduct,
} = require("../controllers/productController");

router.post("/AddProduct", AddProduct);
router.get("/getAllProduct", getAllProduct);
router.get("/getAProduct", getAProduct);

module.exports = router;
