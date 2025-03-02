const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT
require("./db/dbConnection");
const Router = require('./routes/route');

app.use("/api/",Router);







app.listen(port,()=>{
    console.log("server is running on port 1998");
})