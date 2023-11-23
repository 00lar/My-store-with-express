const { faker } = require("@faker-js/faker");
const express = require("express");
const { route } = require("./products.router");

const router = express.Router();

router.get("/",(req,res) => {
  const productos = [];
  const {size} = req.query;
  const limite = size || 10;

  for (let index = 0 ; index < limite; index++){
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      Image: faker.image.url(),
    })
  }
  res.json(productos)

  })

  router.post("/", (req, res) => {
    const body = req.body;
    res.json({
      message: "created",
      data: body
    })
  })

  router.get("/:id", (req,res) => {
    const {id} = req.params;
    res.json({
      id,
      name: "product 2",
        price: 1000,
    })
  }),

  router.get("/filter", (req,res) => {
    res.send("Yo soy un filter")
  })

  router.patch("/:id", (req, res) => {
    const body = req.body
    const {id} = req.params;
    res.json({
      message: "updated",
      data: body,
      id
    })
  })

  router.delete("/:id", (req, res) => {
    const {id} = req.params
    const body = req.body
    req.json ({
      message: "deleted",
      id
    })
  })

  module.exports = router;
