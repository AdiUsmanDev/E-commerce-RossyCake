// const express = require("express");
// const app = express();
// const cartRoutes = require("./routes/cart.routes");
// const authRoutes = require("./routes/auth.routes");
// const accRoutes = require("./routes/accountRoute");
// const adminRoutes = require("./routes/adminRoute");

// app.use(express.json());
// app.use("/api/cart", cartRoutes);
// app.use("/api/auth", authRoutes); //daftar admin dan user
// app.use("/api/account",accRoutes);
// app.use("/api/admin",adminRoutes); // menajemaen admin

// app.listen(10000, () => console.log("Server running on http://localhost:3000"));

import http from "http";
import { app } from "./configs/app.js";

const port = process.env.PORT || 8000;
const host = process.env.HOST || "localhost";

const server = http.createServer(app);

try {
  server.listen(port, () => {
    console.log(`🚀 Server is on ${host}:${port}`);
  });
} catch (error) {
  console.log(`Error: ${error.message}`);
}
