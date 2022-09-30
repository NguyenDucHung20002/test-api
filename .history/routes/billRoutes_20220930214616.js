const router = require("express").Router();

const { addBill } = require("../controllers/billController");

router.post("/addBill", addBill);

module.exports = router;
