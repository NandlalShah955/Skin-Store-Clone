const express = require("express");
const Product = require("./product.model");

const app = express.Router();

app.get("/", async(req,res)=> {
    let products = await Product.find();
    res.send(products);
})

app.get("/:category", async(req,res)=> {
    let {category} = req.params;
    try{
        let products = await Product.find({category: category});
        res.send(products);
    }catch(e){
        res.status(401).send(e.message);
    }
})

app.get("/:category/:id", async(req,res)=> {
    try{
        let product = await Product.find({_id:req.params.id,category:req.params.category});
        res.send(product);
    }catch(e){
        res.status(401).send(e.message)
    }
})

module.exports = app;