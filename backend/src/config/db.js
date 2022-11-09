const mongoose = require("mongoose");

const Connect = ()=>{
    return mongoose.connect('mongodb://localhost:27017/blossom');
}

module.exports = Connect;