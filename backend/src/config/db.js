const mongoose = require("mongoose");

const Connect = ()=>{
    return mongoose.connect('mongodb+srv://nitesh:samaniya@cluster0.fq7r0cr.mongodb.net/blossom');
}

module.exports = Connect;