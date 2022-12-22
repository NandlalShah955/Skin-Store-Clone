const express = require("express");

const User = require("../users/user.model");
const Cart = require("./cart.model");

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

app.delete("/:id", async(req,res)=> {
    try{
        const id = req.params.id;
        let afterDelete = await Cart.findByIdAndDelete(id);
        res.status(200).send(afterDelete);
    }catch(e){
        console.log(e);
    }
})

module.exports = app;
