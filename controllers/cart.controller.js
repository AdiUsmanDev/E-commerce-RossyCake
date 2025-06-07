const Cart = require("../models/cart.model");

exports.getCart = async (req, res) => {
  try {
    const items = await Cart.getCartItems(req.user.id);
    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const updated = await Cart.addOrUpdateCartItem(req.user.id, productId, quantity);
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteCartItem = async (req, res) => {
  const { productId } = req.params;
  try {
    const updated = await Cart.deleteCartItem(req.user.id, productId);
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
