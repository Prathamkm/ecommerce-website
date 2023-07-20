const express = require("express");
const {
  createProducts,
  fetchAllProducts,
  fetchProductsById,
  updateProduct,
} = require("../controller/Product");

const router = express.Router();

router
  .post("/", createProducts)
  .get("/", fetchAllProducts)
  .get("/:id", fetchProductsById)
  .patch("/:id", updateProduct);

exports.router = router;
