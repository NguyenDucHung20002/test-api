const router = require("express").Router;

const { AdminRegister } = require("../controllers/adminController");

router.post("/AdminRegister", AdminRegister);

module.exports = router;
