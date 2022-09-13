const router = require("express").Router();

const { login, register } = require("../controllers/userController");

router.post("/login", login);
router.get("/hello", login);
router.post("/register", register);

module.exports = router;
