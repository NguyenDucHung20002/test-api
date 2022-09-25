const router = require("express").Router();

const {
  AddProduct,
  getAllProducts,
  getAProduct,
  updateProduct,
} = require("../controllers/productController");

router.post("/AddProduct", AddProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getAProduct/:id", getAProduct);
router.put("/updateProduct/:id", updateProduct);

module.exports = router;
