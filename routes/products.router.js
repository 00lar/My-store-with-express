const express = require('express');
const { route } = require('./products.router');

const ProductsService = require('../services/product.service');
const service = new ProductsService();

const router = express.Router();

router.get('/', (req, res) => {
  const productos = service.find();

  res.json(productos);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    newProduct,
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
}),
  router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
  });

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  req.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
