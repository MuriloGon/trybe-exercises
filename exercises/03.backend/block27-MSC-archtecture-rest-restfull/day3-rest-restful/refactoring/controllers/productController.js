const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

// GET /products/
router.get('/', async (req, res /* next */) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

// GET /products/:id | params -> { id }
router.get('/:id', async (req, res /* next */) => {
  const { id } = req.params;
  const product = await ProductModel.getById(id);

  res.status(200).json(product);
});

// POST /products/ | body -> { name, brand }
router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

// DELETE /products/:id | params -> { id }
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await ProductModel.exclude(id);

  res.status(200).json(products);
});

// PUT /products/:id | params -> { id }, body -> { name, brand }
router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params;
  const products = await ProductModel.update(id, name, brand);

  res.status(200).json(products);
});

module.exports = router;
