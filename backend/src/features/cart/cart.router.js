const express = require("express");

const User = require("../users/user.model");
const Cart = require("./cart.model");

const app = express.Router();

app.get("/", async(req,res)=> {
    let cart = await Cart.find();
    res.send(cart);
})

app.get("/:id", async(req,res)=> {
    try{
        const cartItem = await Cart.find({userId: req.params.id})
        return res.send(cartItem);
    }catch(e){
        res.status(500).send(e.message);
    }
})


app.post("")