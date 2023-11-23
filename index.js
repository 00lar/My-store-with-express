const express = require("express");
const app = express();
const port = 3001;


app.get("/",(req, res) => {
  res.send("hello to my server in express")
} )

app.get("/new-rute",(req,res)=> {
res.send("Nuevo endpoint")
})

app.get("/products",(req,res) => {
  res.json ([
    {
      name: "product 1",
      price:1000,
    },
    {
      name: "product 2",
      price: 1000,
    }

  ])
  
  app.get("/users", (req,res) => {
    const {limit, offset} = res.query;
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
