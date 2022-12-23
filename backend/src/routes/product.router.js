const express = require("express");
const Product = require("../models/product.model");

const app = express.Router();

app.get("/", async(req,res)=> {
    let products = await Product.find();
    res.send(products);
})

app.get("/:category", async(req,res)=> {
    const {limit=10, page=1} = req.query;
    let {category} = req.params;

    try{
        let products = await Product.find({category: category}).limit(12).skip((page-1)*limit);
        res.send(products);
    }catch(e){
        res.status(401).send(e.message);
    }
})

//sort asc or desc according to price and rating 
app.get("/:category/:sortType", async(req,res)=> {
    let {category, sortType} = req.params;
    const {limit=10, page=1} = req.query;

    try{

        if(sortType === "asc"){
            let products = await Product.find({category: category}).sort({price: 1}).limit(12).skip((page-1)*limit);
            res.status(201).send(products);
        }

        else if(sortType === "desc"){
            let products = await Product.find({category: category}).sort({price: -1}).limit(12).skip((page-1)*limit);
            res.status(201).send(products);
        }

        else if(sortType === "three"){
            let products = await Product.find({category: category, rating: 3}).limit(12).skip((page-1)*limit);
            res.status(201).send(products);
        }

        else if(sortType === "four"){
            let products = await Product.find({category: category, rating: 4}).limit(12).skip((page-1)*limit);
            res.status(201).send(products);
        }

        else if(sortType === "five"){
            let products = await Product.find({category: category, rating: 5}).limit(12).skip((page-1)*limit);
            res.status(201).send(products);
        }

        else if(sortType === "ot"){
            let products = await Product.find({ $and: [{category: category}, {price: {$gte: 1, $lte: 10}}]}).limit(12).skip((page-1)*limit);
            res.status(201).send(products);
        }

        else if(sortType === "et"){
            let products = await Product.find({ $and: [{category: category}, {price: {$gte: 11, $lte: 20}}]}).limit(12).skip((page-1)*limit);
            res.status(201).send(products);
        }

        else if(sortType === "tt"){
            let products = await Product.find({ $and: [{category: category}, {price: {$gte: 21, $lte: 30}}]}).limit(12).skip((page-1)*limit);
            res.status(201).send(products);
        }

        else if(sortType === "ff"){
            let products = await Product.find({ $and: [{category: category}, {price: {$gte: 41, $lte: 50}}]}).limit(12).skip((page-1)*limit);
            res.status(201).send(products);
        }

        else if(sortType === "af"){
            let products = await Product.find({ $and: [{category: category}, {price: {$gte: 51, $lte: 500}}]}).limit(12).skip((page-1)*limit);
            res.status(201).send(products);
        }

        else{
            res.status(404).send("incorrect url")
        }
    }catch(e){
        res.status(404).send("nahi ho rha",e);
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

app.post("/", async(req,res)=> {
    const id = req.headers["authorization"];
    try{
        const product = new Product({...req.body, userId: id});
        await product.save();
        return res.status(200).send(product);
    }catch(e){
        return res.status(400).send(e)
    }
})

module.exports = app;