const router = require("express").Router();

const { addBill, getAllBills } = require("../controllers/billController");

router.post("/addBill", addBill);
router.get("/getAllBills", getAllBills);
module.exports = router;
