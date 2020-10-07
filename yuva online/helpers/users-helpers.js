const db = require('../config/connection');
const collection = require('../helpers/collections');
const bcrypt = require('bcrypt');


module.exports={


    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
                userData.password = await bcrypt.hash(userData.password ,10);
                db.get().collection(collection.USERS_COLLECTION).insertOne(userData).then((data)=>{
                    resolve(data.ops[0])
                })
        })
    },
    doLogin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let login =false;
            let response = {};
            let user = await db.get().collection(collection.USERS_COLLECTION).findOne({email:userData.email});
            if(user){
                bcrypt.compare(userData.password,user.password).then((status)=>{
                    if(status){
                        console.log("login success"); 
                        response.user=user;
                        response.status=true;
                        resolve(response)
                    }else{
                        console.log("login failed");
                            resolve({status:false})
                    }
                      

                });

            }else{
                console.log("login failed");
                resolve({status:false})
            }

        })
    }


}