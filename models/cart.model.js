const db = require("../config/db");

exports.getCartItems = async (customerId) => {
  const [rows] = await db.query(
    `SELECT p.id, p.name, p.price, p.image_url AS imageUrl, ci.quantity, p.category AS variant
     FROM cart_items ci
     JOIN carts c ON c.id = ci.cart_id
     JOIN products p ON p.id = ci.product_id
     WHERE c.customer_id = ?`,
    [customerId]
  );
  return rows;
};

exports.addOrUpdateCartItem = async (customerId, productId, quantity) => {
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();

    let [rows] = await conn.query("SELECT id FROM carts WHERE customer_id = ?", [customerId]);
    let cartId = rows[0]?.id;

    if (!cartId) {
      const [result] = await conn.query("INSERT INTO carts (customer_id) VALUES (?)", [customerId]);
      cartId = result.insertId;
    }

    const [existing] = await conn.query(
      "SELECT id FROM cart_items WHERE cart_id = ? AND product_id = ?",
      [cartId, productId]
    );

    if (existing.length > 0) {
      await conn.query(
        "UPDATE cart_items SET quantity = quantity + ? WHERE cart_id = ? AND product_id = ?",
        [quantity, cartId, productId]
      );
    } else {
      await conn.query(
        "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)",
        [cartId, productId, quantity]
      );
    }

    await conn.commit();
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }

  return await exports.getCartItems(customerId);
};

exports.deleteCartItem = async (customerId, productId) => {
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();

    const [cartRows] = await conn.query("SELECT id FROM carts WHERE customer_id = ?", [customerId]);
    const cartId = cartRows[0]?.id;
    if (!cartId) throw new Error("Cart not found");

    await conn.query("DELETE FROM cart_items WHERE cart_id = ? AND product_id = ?", [cartId, productId]);
    await conn.commit();
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }

  return await exports.getCartItems(customerId);
};
