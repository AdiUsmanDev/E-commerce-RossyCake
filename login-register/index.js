const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const mysql = require("mysql2");
//const productRoutes = require('./crud-product/routes/product');
const { getUsers } = require('./users');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

const SECRET_KEY = "secret123";

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

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = await getUsers();
  const user = users.find(u => u.name === username);
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  try {
    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });

  } catch (err) {
    console.error("Error verifying password:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.post('/register', async (req, res) => {
  const { username,email , password, phone, address } = req.body;

  if (!username || !password) {
      return res.status(400).json({ message: 'Username dan password harus diisi' });
  }

  try {

    function ValidGmail(email) {
      const regex = /^[^\s@]+@gmail\.com$/i;  
      return regex.test(email);
    }

    if (!ValidGmail(email)) {
      return res.status(400).json({ message: 'Email harus menggunakan Gmail "contoh@gmail.com"' });
    }
     
      const [existing] = await db.promise().query('SELECT id FROM customers WHERE name = ?', [username]);
      if (existing.length > 0) {
          return res.status(409).json({ message: 'Username sudah digunakan' });
      }

      const [existin] = await db.promise().query('SELECT id FROM customers WHERE email = ?', [email]);
      if (existin.length > 0) {
          return res.status(409).json({ message: 'Email sudah digunakan' });
      }

      const hashedPassword = await argon2.hash(password);

      await db.promise().query(
          'INSERT INTO customers (name, email, password, phone , address) VALUES (?, ?, ?, ?,?)',
          [username, email, hashedPassword, phone, address]
      );

      res.status(201).json({ message: 'Pendaftaran berhasil' });

  } catch (err) {
      console.error(' Error saat register:', err);
      res.status(500).json({ message: 'Terjadi kesalahan saat mendaftar' });
  }
});


//app.use('/productapi', productRoutes);




app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
