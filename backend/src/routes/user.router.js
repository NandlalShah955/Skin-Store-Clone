const express = require("express");
const User = require("../models/user.model");
const adminAuth = require("../middleware/adminAuth");

const app = express.Router();

app.get("/", async(req,res)=> {
    const users = await User.find();
    return res.send(users);
})

app.get("/:id", async(req,res)=> {//user's id
    const {id} = req.params;
    // console.log(id)
    try{
        const user = await User.findById(req.params.id);
        return res.status(201).send(user);
    }catch(e){
        return res.status(400).send(e);
    }
})

app.post("/signup", async(req,res)=> {
    let {email, password, userName} = req.body;
    try{
        let user = await User.findOne({email});

        if(user){
            return res.status(404).send(`Cannot create an account with an existing email ${email}`);
        }

        let newUser = await User.create({email, password, userName});
        res.send({token: `${newUser.id}:${newUser.email}:${newUser.password}`})

    }catch(e){
        res.status(500).send(e.message);
    }
})

app.post("/login", async(req,res)=> {
    let {email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(user){
            if(password === user.password){
                res.send({
                    token: `${user.id}:${email}:${user.password}`,
                    user: user
                })
            }
            else{
                res.status(401).send("Authentication Failure, incorrect password")
            }
        }
        else{
            res.status(404).send(`User with email: ${email} not found`)
        }
    }catch(e){  
        res.status(500).send(e.message);
    }
})


module.exports = app;