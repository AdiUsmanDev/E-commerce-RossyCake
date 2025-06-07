const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) return res.status(401).json({ success: false, message: "Token tidak tersedia" });

  try {
    const decoded = jwt.verify(token, "Rossycake_key_admin"); 
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Token tidak valid" });
  }};

//module.exports = (req, res, next) => {
  // Sementara: anggap user sudah login dengan ID 1
  //req.user = { id: 1 };
  //next();
//};

