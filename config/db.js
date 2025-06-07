const mysql = require("mysql2");
const db = mysql.createConnection({
  host: 'mainline.proxy.rlwy.net',
  user: 'root',                  
  password: 'bCSWjtSvNRgZuvxfAKbuOXrSZLoaxNbX', 
  database: 'rossycake',           
  port: 31694                     
});

db.connect(err => {
  if (err) throw err;
  console.log('Terhubung ke database MySQL');
});

module.exports = db;
