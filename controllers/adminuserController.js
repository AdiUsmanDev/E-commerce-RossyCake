const db = require("../config");

exports.getAllUsers = (req, res) => {
  db.query("SELECT id, username, email, role, status FROM users", (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.json({ success: true, data: results });
  });
};

exports.createUser = (req, res) => {
  const { username, email, password, role, status } = req.body;
  // Asumsikan password sudah di-hash sebelumnya
  db.query(
    "INSERT INTO users (username, email, password, role, status) VALUES (?, ?, ?, ?, ?)",
    [username, email, password, role, status],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err });
      res.status(201).json({
        success: true,
        data: { id: result.insertId, username, email, role, status }
      });
    }
  );
};

exports.updateUser = (req, res) => {
  const { userId } = req.params;
  const { username, email, role, status } = req.body;
  db.query(
    "UPDATE users SET username = ?, email = ?, role = ?, status = ? WHERE id = ?",
    [username, email, role, status, userId],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err });
      if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "User tidak ditemukan" });
      res.json({ success: true, message: "User berhasil diupdate" });
    }
  );
};

exports.deleteUser = (req, res) => {
  const { userId } = req.params;
  db.query(
    "DELETE FROM users WHERE id = ?",
    [userId],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err });
      if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "User tidak ditemukan" });
      res.json({ success: true, message: "User berhasil dihapus" });
    }
  );
};
