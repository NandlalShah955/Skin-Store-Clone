const sellerAuth = (req,res,next)=> {
    let role = req.body;
    console.log(role)
    if(role.role === "seller"){
        next();
    }else{
        return res.status(403).send("you are not allowed to do this operation.")
    }
}

module.exports = sellerAuth;