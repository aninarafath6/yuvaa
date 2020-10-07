const db = require("../config/connection");
const collection = require("./collections");
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
      .collection(collection.HOME_PRODECTS)
      .find()
      .toArray();
      resolve(data)

    })
   
  },
};
