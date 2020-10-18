var jwt = require('jsonwebtoken')
module.exports =validUser=(req,res,next)=>{
    return new Promise((resolve,reject)=>{
        
    let authHedder = req.headers.authorazation;
    if (authHedder ==undefined) {
        console.log("hws");
        res.send({loggin:false})  
        
        
        
    }
   else{
    let token =authHedder.split(' ')[1];
    jwt.verify(token,'key',(err,decode)=>{
        resolve(decode)

        next();
    })
   }
    })
    
};