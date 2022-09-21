const router = require("express").Router();

const {
  getAllUser,
  login,
  register,
  hello,
  getAUser,
} = require("../controllers/userController");

router.post("/login", login);
router.get("/hello", hello);
router.get("/getAUser/id:", getAUser);
router.get("/getAllUser", getAllUser);
router.post("/register", register);

module.exports = router;
