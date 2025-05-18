const express = require('express');
const router = express.Router();
const productModel = require('../models/product');

router.post('/product', async (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ message: 'Nama, harga, dan deskripsi produk harus diisi' });
  }

  try {
    const result = await productModel.createProduct(name, price, description);
    res.status(201).json({ message: 'Produk berhasil dibuat', id: result.insertId });
  } catch (error) {
    console.error(' Error saat membuat produk:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat membuat produk' });
  }
});

router.get('/products', async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(' Error saat mengambil produk:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil produk' });
  }
});


router.get('/product/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productModel.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
    res.json(product);
  } catch (error) {
    console.error(' Error saat mengambil produk:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil produk' });
  }
});


router.put('/product/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ message: 'Nama, harga, dan deskripsi produk harus diisi' });
  }

  try {
    const result = await productModel.updateProduct(id, name, price, description);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
    res.json({ message: 'Produk berhasil diupdate' });
  } catch (error) {
    console.error(' Error saat mengupdate produk:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengupdate produk' });
  }
});

router.delete('/product/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await productModel.deleteProduct(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
    res.json({ message: 'Produk berhasil dihapus' });
  } catch (error) {
    console.error(' Error saat menghapus produk:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat menghapus produk' });
  }
});

module.exports = router;
