require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const bookRoutes = require("./src/api/routes/book");
const autorRoutes = require("./src/api/routes/autor");

const app = express();
connectDB();
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/autor", autorRoutes);
app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found")
})
const fs = require("fs");


app.listen(3000, ()=>{
    console.log("servidor desplegado en http://localhost:3000");
})