const express = require("express");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware for JSON parsing

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
