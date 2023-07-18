const express = require("express");
const { createProducts } = require("../controller/Product");

const router = express.Router();

router.post("/", createProducts);

exports.router = router;
