const router = require("express").Router();

const {
  AddProduct,
  getAllProducts,
  getAProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/AddProduct", AddProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getAProduct/:id", getAProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct", deleteProduct);

module.exports = router;
