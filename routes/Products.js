const express = require("express");
const { createProducts, fetchAllProducts } = require("../controller/Product");

const router = express.Router();

router.post("/", createProducts).get("/", fetchAllProducts);

exports.router = router;
