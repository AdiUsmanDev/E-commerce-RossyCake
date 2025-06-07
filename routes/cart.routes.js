const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");
const authMiddleware = require("../middleware/auth");

router.use(authMiddleware);

router.get("/api/cart/", cartController.getCart);
router.post("/api/cart/", cartController.addToCart);
router.delete("/api/cart/", cartController.deleteCartItem);

module.exports = router;
