const router = require("express").Router();

const {
  AdminRegister,
  getAllAdmin,
  updateAdmin,
  getAAdmin,
} = require("../controllers/adminController");

router.post("/AdminRegister", AdminRegister);
router.get("/getAllAdmin", getAllAdmin);
router.put("/updateAdmin/:id", updateAdmin);
router.get("/getAAdmin/:id", getAAdmin);

module.exports = router;
