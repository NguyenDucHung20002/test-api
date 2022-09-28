const router = require("express").Router();

const {
  AdminRegister,
  getAllAdmin,
  updateAdmin,
  getAAdmin,
  deleteAdmin,
} = require("../controllers/adminController");

router.post("/AdminRegister", AdminRegister);
router.get("/getAllAdmin", getAllAdmin);
router.put("/updateAdmin/:id", updateAdmin);
router.get("/getAAdmin/:id", getAAdmin);
router.delete("/deleteAdmin/:id", deleteAdmin);

module.exports = router;
