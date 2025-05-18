
const mysql = require('mysql2/promise');
const argon2 = require('argon2');

async function getUsers() {

  const connection = await mysql.createConnection({
    host: 'mainline.proxy.rlwy.net',
    user: 'root',                  
    password: 'bCSWjtSvNRgZuvxfAKbuOXrSZLoaxNbX', 
    database: 'rossycake',           
    port: 31694         
  });

  try {
    const [rows] = await connection.query('SELECT * FROM customers');
    return rows;
  } catch (error) {
    console.error('Gagal mengambil users:', error);
    return [];
  } finally {
    await connection.end(); 
  }
}

module.exports = { getUsers };