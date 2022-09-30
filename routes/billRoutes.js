const router = require("express").Router();

const {
  addBill,
  getAllBills,
  getABill,
} = require("../controllers/billController");

router.post("/addBill", addBill);
router.get("/getAllBills", getAllBills);
router.get("/getABill/:id", getABill);
module.exports = router;
