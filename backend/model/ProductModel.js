const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    "_id":{type:String,required:true},
    "name":{type:String,required:true},
    "brand":{type:String,required:true},
    "cost":{type:Number,required:true},
    "rating":{type:Number,required:true},
    "image":{type:String,required:true},
    "description":{type:String,required:true},
    "numReviews":{type:String,required:true}
});

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;