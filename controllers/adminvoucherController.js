const db = require("../config");

exports.getAllVouchers = (req, res) => {
  db.query("SELECT * FROM vouchers", (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.json({ success: true, data: results });
  });
};

exports.createVoucher = (req, res) => {
  const { code, discount, expiresAt } = req.body;
  db.query(
    "INSERT INTO vouchers (code, discount, expires_at) VALUES (?, ?, ?)",
    [code, discount, expiresAt],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err });
      res.status(201).json({
        success: true,
        data: { id: result.insertId, code, discount, expiresAt }
      });
    }
  );
};

exports.updateVoucher = (req, res) => {
  const { voucherId } = req.params;
  const { code, discount, expiresAt } = req.body;
  db.query(
    "UPDATE vouchers SET code = ?, discount = ?, expires_at = ? WHERE id = ?",
    [code, discount, expiresAt, voucherId],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err });
      if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "Voucher tidak ditemukan" });
      res.json({ success: true, message: "Voucher berhasil diupdate" });
    }
  );
};

exports.deleteVoucher = (req, res) => {
  const { voucherId } = req.params;
  db.query(
    "DELETE FROM vouchers WHERE id = ?",
    [voucherId],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err });
      if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "Voucher tidak ditemukan" });
      res.json({ success: true, message: "Voucher berhasil dihapus" });
    }
  );
};
