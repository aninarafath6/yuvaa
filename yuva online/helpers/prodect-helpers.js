const db = require("../config/connection");
const collection= require('./collections')
module.exports = {
  addProdect: (prodect, callback) => {
  
    db.get()
      .collection(collection.ALLPRODECTS_COLLECTION)
      .insertOne(prodect)
      .then((data) => {
        callback(data.ops[0]._id);
      });
  },
  getAllprodects: (callback) => {
    db.get()
      .collection(collection.ALLPRODECTS_COLLECTION)
      .find({})
      .toArray((err, data) => {
        if (err) throw err;
        callback(data);
      });
  },
  searchProdects: (ctlo, callback) => {
    db.get()
      .collection(collection.ALLPRODECTS_COLLECTION)
      .find({ catogary: ctlo })
      .toArray((err, data) => {
        callback(data);
      });
  },
  homeProdects:(calback)=>{
    db.get().collection(collection.HOME_PRODECTS).find().toArray((err,data)=>{
      const prodects =[data];

      calback(prodects)
    })
  },
};
