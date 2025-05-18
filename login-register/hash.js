const argon2 = require('argon2');

async function hashPassword(password) {
  try {
    const hash = await argon2.hash(password);
    console.log("Hash:", hash);
    // Simpan hash ini ke database
  } catch (err) {
    console.error("Error hashing password:", err);
  }
}

// Contoh penggunaan
hashPassword('123');