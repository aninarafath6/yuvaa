var jwt = require('jsonwebtoken')
module.exports=(authHedder)=>{
    return new Promise((resolve,reject)=>{
        let token =authHedder.split(' ')[1];
        console.log(token);
        jwt.verify(token,'key',async(err,decode)=>{
            
            console.log(decode)
         resolve(decode)     
        })

    })

}