const router = require("express").Router();

const Auth = require("../controller/authController");
const authenticate = require("../middlewares/authenticate");

router.post("/register", authenticate, Auth.register);
router.post("/login", Auth.login);
router.get("/me", authenticate, Auth.authenticate);

module.exports = router;
