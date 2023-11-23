const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");
const port = 3001;


app.get("/",(req, res) => {
  res.send("hello to my server in express")
} )

app.get("/new-rute",(req,res)=> {
res.send("Nuevo endpoint")
})



app.get("/products",(req,res) => {
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



  app.get("/users", (req,res) => {
    const {limit, offset} = req.query;
    if(limit && offset) {
      res.json({
        limit,
        offset
      })
    } else {
      res.send("No hay parametros")
    }
  })


app.get("/products/:id", (req,res) => {
  const {id} = req.params;
  res.json({
    id,
    name: "product 2",
      price: 1000,
  })
}),

app.get("/products/filter", (req,res) => {
  res.send("Yo soy un filter")
})

app.get("/categories/:categoryId/products/:productId", (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    id,
    categoryId,
    productId
  })
})



app.listen(port, ()=> {
  console.log("My port:" + port )
} )
