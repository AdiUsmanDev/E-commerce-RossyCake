const db = require("../config"); // koneksi mysql

exports.getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.json({ success: true, data: results });
  });
};

exports.getProductById = (req, res) => {
  const { productId } = req.params;
  const sql = "SELECT * FROM products WHERE id = ?";
  db.query(sql, [productId], (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err });
    if (results.length === 0) return res.status(404).json({ success: false, message: "Produk tidak ditemukan" });
    res.json({ success: true, data: results[0] });
  });
};

exports.createProduct = (req, res) => {
  const { name, price, stock, description } = req.body;
  const sql = "INSERT INTO products (name, price, stock, description) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, price, stock, description], (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.status(201).json({
      success: true,
      data: { id: result.insertId, name, price, stock, description }
    });
  });
};

exports.updateProduct = (req, res) => {
  const { productId } = req.params;
  const { name, price, stock, description } = req.body;
  const sql = "UPDATE products SET name = ?, price = ?, stock = ?, description = ? WHERE id = ?";
  db.query(sql, [name, price, stock, description, productId], (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err });
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "Produk tidak ditemukan" });
    res.json({ success: true, message: "Produk berhasil diupdate" });
  });
};

exports.deleteProduct = (req, res) => {
  const { productId } = req.params;
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [productId], (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err });
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "Produk tidak ditemukan" });
    res.json({ success: true, message: "Produk berhasil dihapus" });
  });
};
