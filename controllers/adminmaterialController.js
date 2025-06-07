const db = require("../config");

exports.getAllMaterials = (req, res) => {
  db.query("SELECT * FROM materials", (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.json({ success: true, data: results });
  });
};

exports.createMaterial = (req, res) => {
  const { name, stock, unit } = req.body;
  db.query(
    "INSERT INTO materials (name, stock, unit) VALUES (?, ?, ?)",
    [name, stock, unit],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err });
      res.status(201).json({
        success: true,
        data: { id: result.insertId, name, stock, unit }
      });
    }
  );
};

exports.updateMaterial = (req, res) => {
  const { materialId } = req.params;
  const { name, stock, unit } = req.body;
  db.query(
    "UPDATE materials SET name = ?, stock = ?, unit = ? WHERE id = ?",
    [name, stock, unit, materialId],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err });
      if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "Bahan baku tidak ditemukan" });
      res.json({ success: true, message: "Bahan baku berhasil diupdate" });
    }
  );
};

exports.deleteMaterial = (req, res) => {
  const { materialId } = req.params;
  db.query(
    "DELETE FROM materials WHERE id = ?",
    [materialId],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err });
      if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "Bahan baku tidak ditemukan" });
      res.json({ success: true, message: "Bahan baku berhasil dihapus" });
    }
  );
};
