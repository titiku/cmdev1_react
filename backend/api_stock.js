const express = require("express");
const Sequelize = require("sequelize");
const product = require("./models/product");
const router = express.Router();

router.get("/product", async  (req, res) => {
  let result = await product.findAll({order:Sequelize.literal('name DESC')});
  res.json({ result: result });
});

module.exports = router;
