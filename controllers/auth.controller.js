const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.register = async (req, res) => {
  const {  username,email , password, phone, address  } = req.body;

  const [[existingUser]] = await User.findByEmail(email);
  if (existingUser) return res.status(400).json({ success: false, message: "Email sudah digunakan" });

  if (!username || !password) {
      return res.status(400).json({ message: 'Username dan password harus diisi' });
  }

  const hash = await bcrypt.hash(password, 10);
  await User.createUser(username,email , hash, phone, address);

  return res.status(201).json({ success: true, message: "Akun berhasil dibuat" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const [[user]] = await User.findByEmail(email);
  if (!user) return res.status(400).json({ success: false, message: "Email tidak ditemukan" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ success: false, message: "Password salah" });

  const token = jwt.sign({ id: user.id, email: user.email }, "Rossycake_key", {
    expiresIn: "1d",
  });

  return res.status(200).json({ success: true, token });
};
