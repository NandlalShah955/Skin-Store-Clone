const express = require("express");
const cors = require("cors");

const PORT = 8080;
const Connect = require("./config/db");

const userRouter = require("./features/users/user.router");
const productRouter = require("./features/products/product.router");
const cartRouter = require("./features/cart/cart.router")

const app = express();
app.use(express.json());
app.use(cors());

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