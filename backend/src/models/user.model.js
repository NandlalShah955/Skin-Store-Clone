const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, max: 8, required: true},
    role: {
        type: String,
        enum: ["admin", "seller", "user"],
        default: "user",
    }
},{
    versionKey: false,
    timestamps: true,
})

const User = mongoose.model("user", userSchema);

module.exports = User;