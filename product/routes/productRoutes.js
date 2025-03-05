const express = require("express");
const { getAllProducts, getProductsByCategory, getProductsByPrice } = require("../controllers/productController");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/price", getProductsByPrice);

module.exports = router;
