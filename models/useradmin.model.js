const db = require("../config/db");

exports.findByEmail = (email) => {
  return db.promise().query("SELECT * FROM admins WHERE email = ?", [email]);
};



exports.createUser = (username, email, hashedPassword) => {
  return db
    .promise()
    .query( 'INSERT INTO admins (name, email, password) VALUES (?, ?, ?, ?,?)',
          [username, email, hashedPassword]);
};
