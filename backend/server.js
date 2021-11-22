const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());


//set the MIME Type
//communication language between client and server called as MIME Type
//json is MIME Type
app.use(express.json());


mongoose.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ecommerce-7am?retryWrites=true&w=majority");


const Product = require("./model/ProductModel");


app.get("/api/products",async (req,res)=>{
    const products = await Product.find();
    res.send(products);
});



app.get("/api/products/:id",async (req,res)=>{
    if(req.params.id == undefined){
        res.send({"msg":"no id detected"});
    }
    const product = await Product.findOne(mongoose.Types.ObjectId(req.params.id));
    if(!product){
        res.status(300).send({"msg":"no product available"});
    }else{
        res.status(200).send(product);
    }
});





app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});
