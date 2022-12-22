const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Sale", "Holiday", "powder", "contour", "liquid", "pencil", "lipstick", "highlighter", "lip_stain", "cream", "palette", "mineral", "concealer", "bb_cc"]
    },
    quantity: {
        type: Number, 
        min: 1, 
        required: true
    },
    rating: {
        type: String, 
        required: true
    },   
    //  productId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "product",
    //     required: true,
    // },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },

},
{
    timestamps: true,
    versionKey: false
})

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;