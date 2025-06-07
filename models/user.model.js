const db = require("../config/db");

exports.findByEmail = (email) => {
  return db.promise().query("SELECT * FROM customers WHERE email = ?", [email]);
};



exports.createUser = (username, email, hashedPassword, phone, address) => {
  return db
    .promise()
    .query( 'INSERT INTO customers (name, email, password, phone , address) VALUES (?, ?, ?, ?,?)',
          [username, email, hashedPassword, phone, address]);
};
