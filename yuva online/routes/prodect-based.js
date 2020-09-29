const express = require("express");
const router = express.Router();
const prodect_helper = require("../helpers/prodect-helpers");
const fs = require('fs')

router.post("/addProdects", (req, res, next) => {
  // console.log(req.body);
  console.log(req.files.img);
 
  prodect_helper.addProdect(req.body, (id) => {
    let img= req.files.img
    img.mv('./public/prodects-images/'+id+'.jpg',(err,done)=>{
      if(err)throw err;
      res.render('addedProdect')
    })
  });
  
});

router.get("/getAllProdects", (req, res, next) => {
  prodect_helper.getAllprodects((data) => {
    res.send(data);
  });
});

router.get("/sPro", (req, res, next) => {
  let ctlo = req.query.cto;
  
  prodect_helper.searchProdects(ctlo, (data) => {
    res.send(data);
  });
});

router.get('/home',(req,res,next)=>{
  prodect_helper.homeProdects((data)=>{
    res.send(data)
  })

})

module.exports = router;
