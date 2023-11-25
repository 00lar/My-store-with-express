const express = require('express');

const ProductsService = require('../services/product.service');
const { tr } = require('@faker-js/faker');
const service = new ProductsService();

const router = express.Router();

router.get('/', async (req, res) => {
  const productos = await service.find();
  res.json(productos);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    newProduct,
  });
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
}),
  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  });

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  req.json(rta);
});

module.exports = router;
