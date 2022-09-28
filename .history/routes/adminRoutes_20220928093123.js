const router = require("express").Router();

const {
  AdminRegister,
  getAllAdmin,
  updateAdmin,
} = require("../controllers/adminController");

router.post("/AdminRegister", AdminRegister);
router.get("/getAllAdmin", getAllAdmin);
router.put("/updateAdmin/:id", updateAdmin);

module.exports = router;
