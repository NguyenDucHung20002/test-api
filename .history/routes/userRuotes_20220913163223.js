const router = require("express").Router();

const {
  getAllUser,
  login,
  register,
  hello,
} = require("../controllers/userController");

router.post("/login", login);
router.get("/hello", hello);
router.get("/getAllUser", hello);
router.post("/register", register);

module.exports = router;
