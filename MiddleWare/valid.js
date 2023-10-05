exports.valid = (req,res,next) => {
    const array = ["age","name","phone","email","address"]
    array.forEach((element)=>{
        if(!req.body[element]) return res.status(400).send({message:`${element} is missing`, status:400});
    })
    if( req.body.age < 18 || typeof(req.body.phone) !== "number" ) return res.status(404).send({'message':'fail'});
    next()

}