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

app.post("/:id", async(req,res)=> { //user ki id
    try{
        let cartItem = await Cart.findOne({
            userId: req.params.id,
            productId: req.body.productId,
        })

        if(cartItem){
            let item = await Cart.updateOne(
                {
                    userId: req.params.id,
                    productId: req.body.productId,
                },
                {
                    $set: {quantity: req.body.quantity}
                }
            )
            return res.send(item);
        }
        else{
            let item = await Cart.create({
                ...req.body,
                userId: req.params.id,
            });
            return res.send(item);
        }
    }catch(e){
        res.status(500).send(e.message);
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
