const db = require('../config/connection');
const collection = require('../helpers/collections');
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const collections = require('../helpers/collections');


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
    },
    addTocart:(ProdId,userId)=>{
        let prodectObject ={
            item:ObjectId(ProdId),
            qnty:1
        }
        return new Promise(async(resolve,reject)=>{
           let userCart = await db.get().collection(collection.CART_COLLECTION).findOne({user:ObjectId(userId)});
           console.log(userCart);
           
           if (userCart) {
               let prodectExist = userCart.prodects.findIndex(prodect=>prodect.item==ProdId);
               if(prodectExist !== -1){
                   db.get().collection(collection.CART_COLLECTION).updateOne(

                       {user:ObjectId(userId),
                           'prodects.item':ObjectId(ProdId)
                        },
                        {
                            $inc:{'prodects.$.qnty':1}
                       }
                   ).then(()=>{
                       resolve()
                   })
               }else{
                db.get().collection(collection.CART_COLLECTION).updateOne({user:ObjectId(userId)},
                {
                    $push:{
                     prodects:prodectObject
 
                    }
                }
                ).then(()=>{
                    resolve()
                })
                
               }
              
           
           }
           else{
               let cartObj ={
                   user:ObjectId(userId),
                   prodects:[prodectObject]
               }
               db.get().collection(collection.CART_COLLECTION).insertOne(cartObj).then((response)=>{
               })

           }
        })

    },
    getCartProdect:(userId)=>{
    return new Promise(async(resolve,reject)=>{
        let cartItems = await db.get().collection(collections.CART_COLLECTION).aggregate([
                {
                    $match:{user:ObjectId(userId)}
                },
                {
                    $unwind:'$prodects'//cheuk pls
                },
                {
                    $project:{
                        item:'$prodects.item',
                        qnty:'$prodects.qnty'
                    }
                },
                {
                    $lookup:{
                        from:collection.ALLPRODECTS_COLLECTION,
                        localField:'item',
                        foreignField:'_id',
                        as:'prodect'

                    }

                },{
                    $project:{item:1,qnty:1,prodect:{$arrayElemAt:['$prodect',0]}}
                }
            ]).toArray()
            resolve(cartItems)
    })
        
    },
    getCartCount:(userId)=>{
return new Promise(async(resolve,reject)=>{
    let count =0;
    let cart =await
     db.get().collection(collection.CART_COLLECTION).findOne({user:ObjectId(userId)});
    if (cart) {
        count = cart.prodects.length
    }
    resolve(count)
})
    },
    qntyIncrymentAnddecriment:(data)=>{
        let count = parseInt(data.count)
    return new Promise(async(resolve,reject)=>{
        let qnty = await db.get().collection(collection.CART_COLLECTION).findOne({_id:ObjectId(data.cartId),'prodects.item':ObjectId(data.prodId)})

      if (qnty.prodects.qnty===1&&count===-1) {
          console.log("inside");
          resolve()
          
      }
        db.get().collection(collection.CART_COLLECTION).updateOne(

            {_id:ObjectId(data.cartId),'prodects.item':ObjectId(data.prodId)
             },
             {
                 $inc:{'prodects.$.qnty':count}
            }
        ).then((res)=>{
            resolve()
        })
      
    })

    },
    // removeFromCart:({cartId,prodId})=>{
    //     return  new Promise((resolve,reject)=>{
    //         db.get().collection(collection.CART_COLLECTION).removeOne({_id:ObjectId(cartId)},'prodects.item':ObjectId(prodId)}).then((response)=>{
    //             resolve(response)
    //         })

    //     })
    //}


}
