const logger = (req,res,next)=>{
    res.status(200).json({status:200,msg:"you gggot this server"})
   console.log(req.body); 
    next()
}

module.exports =logger;