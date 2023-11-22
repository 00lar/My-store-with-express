const express = require("express");
const app = express();
const port = 3001;

app.get("/",(req, res) => {
  res.send("hello to my server in express")
} )

app.listen(port, ()=> {
  console.log("My port:" + port )
} )
