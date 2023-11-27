const express = require("express");
const router = require("./products.router");

router.get("/", (req,res) => {
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


module.exports = router;
