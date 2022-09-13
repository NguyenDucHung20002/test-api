const router = require("express").Router();

const { login, register, hello } = require("../controllers/userController");

router.post("/login", login);
router.get("/hello", hello);
router.post("/register", register);

module.exports = router;
