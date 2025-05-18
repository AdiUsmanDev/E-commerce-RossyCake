const db = require('../db'); 


const createProduct = async (name, price, description) => {
  const query = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
  const [result] = await db.promise().query(query, [name, price, description]);
  return result;
};


const getAllProducts = async () => {
  const query = 'SELECT * FROM products';
  const [rows] = await db.promise().query(query);
  return rows;
};


const getProductById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [rows] = await db.promise().query(query, [id]);
  return rows[0];
};

const updateProduct = async (id, name, price, description) => {
  const query = 'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?';
  const [result] = await db.promise().query(query, [name, price, description, id]);
  return result;
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  const [result] = await db.promise().query(query, [id]);
  return result;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
