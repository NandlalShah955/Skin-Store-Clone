const express = require("express");
const User = require("./user.model");

const app = express.Router();

app.get("/", async(req,res)=> {
    const users = await User.find();
    return res.send(users);
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
                res.send({token: `${user.id}:${email}:${user.password}`})
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