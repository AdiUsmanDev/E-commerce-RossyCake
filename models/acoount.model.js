const db = require('../config/db');

exports.getUserById = (id, callback) => {
  const sql = `
    SELECT id, userName, phone, email, role, 
           addressLine1, city, province, postalCode 
    FROM users WHERE id = ?
  `;
  db.query(sql, [id], callback);
};

exports.updateUserProfile = (id, fullName, phone, callback) => {
  const sql = `UPDATE users SET userName = ?, phone = ? WHERE id = ?`;
  db.query(sql, [fullName, phone, id], callback);
};

exports.deleteUserById = (id, callback) => {
  const sql = `DELETE FROM  customers WHERE id = ?`;
  db.query(sql, [id], callback);
};