const router = require("express").Router();

const {
  AdminRegister,
  getAllAdmin,
} = require("../controllers/adminController");

router.post("/AdminRegister", AdminRegister);
router.get("/getAllAdmin", getAllAdmin);

module.exports = router;
