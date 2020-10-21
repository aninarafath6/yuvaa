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
    qntyIncrymentAnddecriment:async(data)=>{
        let count = parseInt(data.count)
        let qqnty = await db.get().collection(collection.CART_COLLECTION).findOne({_id:ObjectId(data.cartId),'prodects.item':ObjectId(data.prodId)})

    return new Promise((resolve,reject)=>{
      if (qqnty.prodects[0].qnty==1 && count==-1) {
        db.get().collection(collection.CART_COLLECTION).updateOne(
            {
                _id:ObjectId(data.cartId)
         },
         {
            $pull:{prodects:{item:ObjectId(data.prodId)}}
        }
        ).then((response)=>{
            console.log(response);
            resolve({removed:true})
        })          
      }
       else{
        db.get().collection(collection.CART_COLLECTION).updateOne(

            {_id:ObjectId(data.cartId),'prodects.item':ObjectId(data.prodId)
             },
             {
                 $inc:{'prodects.$.qnty':count}
            }
        ).then((res)=>{
            resolve({removed:false})
        })
       }
      
    })

    },
    removeFromCart:({cartId,prodId})=>{
       return new Promise((resolve,reject)=>{
           db.get().collection(collection.CART_COLLECTION).updateOne(
               {
                   _id:ObjectId(cartId)
            },
            {
               $pull:{prodects:{item:ObjectId(prodId)}}
           }
           ).then((response)=>{
               console.log(response);
               resolve(response)
           })
       })
    },
    priceTracker:(userId)=>{
        return new Promise(async(resolve,reject)=>{
            let cart = await db.get().collection(collection.CART_COLLECTION).findOne({user:ObjectId(userId)})
            console.log(cart);
            if(cart.prodects.length!==0){
                let priceTracker = await db.get().collection(collections.CART_COLLECTION).aggregate([
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
                    },
                    {
                        $group:{
                            _id:null,
                            totalOffPrice:{$sum:{$multiply:['$qnty','$prodect.offPrice']}},
                            totalMRP:{$sum:{$multiply:['$qnty','$prodect.canPrice']}},
                        }
                    }
                ]).toArray()
                    console.log(priceTracker);
                    resolve(priceTracker[0])
            

            }else{
                resolve({totalOffPrice:null,totalMRP:null})
            }
           
              
        })
    },
    getProdetList:(userId)=>{
        return new Promise(async(resolve,reject)=>{
            let cart = await db.get().collection(collection.CART_COLLECTION).findOne({user:ObjectId(userId)});
            resolve(cart.prodects)
        })
    },
    placeOrder:(order,cart,total,userId)=>{
        return new Promise((resolve,reject)=>{
            console.log(order,cart,total,userId);
            let status =order.payment==='cod'?'placed':'pending';
    

            let orderObj={
                deliveryDetails:order,
                userId:ObjectId(userId),
                paymentMethod:order.payment,
                prodects:cart,
                total:total,
                date:new Date(),
                status:status

          }
          db.get().collection(collection.ORDER_COLLECTION).insertOne(orderObj).then((response)=>{
              db.get().collection(collection.CART_COLLECTION).removeOne({user:ObjectId(userId)})
              resolve()
              console.log(response);
          })

            })

    }


}
