const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");
const port = 3001;
const routerApi = require("./routes")

console.clear()


app.get("/",(req, res) => {
  res.send("hello to my server in express")
} )

app.get("/new-rute",(req,res)=> {
res.send("Nuevo endpoint")
})



app.listen(port, ()=> {
  console.log("My port:" + port )
} )


routerApi(app)
