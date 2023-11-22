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
  res.json ({
    name: "product 1",
    price:1000,
  })
})

app.listen(port, ()=> {
  console.log("My port:" + port )
} )
