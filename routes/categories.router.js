const express = require("express");
const router = require("./products.router");

router.get("/:categoryId/products/:productId", (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    id,
    categoryId,
    productId
  })
})



module.exports = router;
