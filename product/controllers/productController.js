const products = require("../models/productModel");

// List All Products
const getAllProducts = (req, res) => {
    res.json(products);
};

// Filter by Category
const getProductsByCategory = (req, res) => {
    const { category } = req.params;
    const filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    res.json(filteredProducts);
};

// Filter by Price (Query String)
const getProductsByPrice = (req, res) => {
    const { min, max } = req.query;
    if (!min || !max) {
        return res.status(400).json({ message: "Please provide min and max price" });
    }

    const filteredProducts = products.filter(p => p.price >= min && p.price <= max);
    res.json(filteredProducts);
};

module.exports = { getAllProducts, getProductsByCategory, getProductsByPrice };
