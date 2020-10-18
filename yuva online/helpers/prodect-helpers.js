const db = require("../config/connection");
const collection = require("./collections");
const ObjectId = require('mongodb').ObjectID;
module.exports = {
  addProdect: (prodect, callback) => {
    db.get()
      .collection(collection.ALLPRODECTS_COLLECTION)
      .insertOne(prodect)
      .then((data) => {
        callback(data.ops[0]._id);
      });
  },
  getAllprodects: () => {
    return new Promise(async (resolve, reject) => {
      let data = await db
        .get()
        .collection(collection.ALLPRODECTS_COLLECTION)
        .find({})
        .toArray();
      resolve(data);
    });
  },
  searchProdects: (ctlo) => {
    return new Promise(async (resolve, reject) => {
      let data = await db
        .get()
        .collection(collection.ALLPRODECTS_COLLECTION)
        .find({ keywords: ctlo })
        .toArray();
      resolve(data);
      reject("err");
    });
  },
  homeProdects: () => {
    return new Promise(async(resolve,rej)=>{
      let data = await db.get()
      .collection(collection.ALLPRODECTS_COLLECTION)
      .find({isHome:"true"})
      .toArray();

      resolve(data)

    })
   
  },
  deleteProdect:proId=>{
    return new Promise ((resolve,reject)=>{
      console.log(proId);
      db.get().collection(collection.ALLPRODECTS_COLLECTION).removeOne({_id:ObjectId(proId)}).then((resp)=>{
        resolve(resp)
      })
    })
  },
  getprodctdata:(id,proDetials)=>{
    return new Promise((resolve,reject)=>{
      db.get().collection(collection.ALLPRODECTS_COLLECTION).findOne({_id:ObjectId(id)}).then((response)=>{
        resolve(response)
      })
    })
  },
  PostEditedOProdectData:(id,proDetials)=>{
    const unsplittedKeywords = proDetials.keywords.toString().toLowerCase();
    const splittedKeywords = unsplittedKeywords.split(",");
   
    return new Promise((resolve,reject)=>{
      db.get().collection(collection.ALLPRODECTS_COLLECTION).updateOne({_id:ObjectId(id)},{
        $set:{
          name: proDetials.name,
          canPrice: proDetials.canPrice,
          offPrice: proDetials.offPrice,
          off: proDetials.off,
          catogary: proDetials.catogary,
          keywords: splittedKeywords,
          disc: proDetials.disc,
          isHome:proDetials.isHome


        }
      }).then(()=>{
        resolve();
      })
    })
  }
};
