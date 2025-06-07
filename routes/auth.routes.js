const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const authControlleradmin = require("../controllers/authadmin.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("admin/register", authControlleradmin.register);
router.post("admin/login", authControlleradmin.login);


module.exports = router;
