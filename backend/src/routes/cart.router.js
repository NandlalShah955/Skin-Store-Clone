const express = require("express");

// const User = require("../users/user.model");
const Cart = require("../models/cart.model");

const app = express.Router();

app.get("/", async(req,res)=> {
    let cart = await Cart.find();
    res.send(cart);
})

app.get("/:id", async(req,res)=> { //user ki id
    try{
        const cartItem = await Cart.find({userId: req.params.id})
        return res.send(cartItem);
    }catch(e){
        res.status(500).send(e.message);
    }
})


app.post("/:id", async(req,res)=> {//user ki id -> add product to cart
    const {id} = req.params;
    try{
        const item = new Cart({...req.body,  userId: id})
        await item.save();
        return res.status(200).send(item);
    }catch(e){
        return res.status(401).send(e);
    }
})

app.patch("/:id", async(req,res)=> { // document ki object _id and body me increased qyt
    const {id} = req.params;
    // console.log(id)
    try{
        const afterUpdate = await Cart.findByIdAndUpdate(id, {$set: {quantity: req.body.quantity}}, {new: true});
        return res.status(200).send(afterUpdate);
    }catch(e){
        return res.status(401).send(e);
    }
})

app.delete("/:id", async(req,res)=> { // document ki object _id 
    const {id} = req.params;
    try{
        const afterDelete = await Cart.findByIdAndRemove(id);
        return res.status(200).send(afterDelete);
    }catch(e){
        return res.status(401).send(e);
    }
})

app.delete("/all/:id", async(req,res)=> {//user ki id se
    const {id} = req.params;
    // console.log(id)
    try{
        const deleteAllitems = await Cart.deleteMany({userId: id});
        return res.status(201).send({ message: "deleted all data", deleteAllitems});
    }catch(e){
        return res.status(400).send(e)
    }
})

module.exports = app;
