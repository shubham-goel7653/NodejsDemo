exports.auth = (req,res,next) => {
    const check = req.headers.authorization.split(" ")
    if(check[1] !== "true") return res.status(400).send({message:"token not valid", status:400});
    next()
}