var jwt = require('jsonwebtoken')
module.exports=(authHedder)=>{
    return new Promise((resolve,reject)=>{
        let token =authHedder.split(' ')[1];
        jwt.verify(token,'key',async(err,decode)=>{
            
         resolve(decode)     
        })

    })

}