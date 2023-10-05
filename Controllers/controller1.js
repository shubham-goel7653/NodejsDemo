exports.firstApi = (req,res) => {
    console.log(req.body);
    console.log(req.headers.authorization);
    const check = req.headers.authorization.split(" ")
    console.log(check);
    return res.status(200).send({'message':'success',status:200})
}