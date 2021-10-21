const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ecommerce-7am?retryWrites=true&w=majority");


const Product = require("./model/ProductModel");


app.get("/api/products",async (req,res)=>{
    const products = await Product.find();
    res.send(products);
});


app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});
