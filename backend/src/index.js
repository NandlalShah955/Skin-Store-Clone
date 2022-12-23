const express = require("express");
const cors = require("cors");
const bodyparser=require('body-parser');

const PORT = process.env.PORT || 8080;
const Connect = require("./config/db");

const userRouter = require("./routes/user.router");
const productRouter = require("./routes/product.router");
const cartRouter = require("./routes/cart.router");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

app.use("/users",userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter)

app.get("/", (req,res)=> {
    res.send("Blossom Beauty Care");
})

app.listen(PORT, async()=> {
    await Connect();
    console.log("listening at port http://localhost:8080");
})