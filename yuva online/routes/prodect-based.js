const express = require("express");
const router = express.Router();
const prodect_helper = require("../helpers/prodect-helpers");
var jwt = require("jsonwebtoken");
var validUser = require("../helpers/valid-user");
const { response } = require("express");

router.post("/addProdects", (req, res, next) => {
  const unsplittedKeywords = req.body.keywords.toString().toLowerCase();
  const splittedKeywords = unsplittedKeywords.split(",");
  const data = {
    name: req.body.name,
    canPrice: parseInt(req.body.canPrice),
    offPrice: parseInt(req.body.offPrice),
    off: req.body.off,
    catogary: req.body.catogary,
    keywords: splittedKeywords,
    disc: req.body.disc,
    isHome:req.body. isHome
  };

  console.log(req.body);

  prodect_helper.addProdect(data, (id) => {
    let img = req.files.img;
    // console.log(img[0]);
    img[0].mv("./public/prodects-images/" + id +"_0.jpg", (err, done) => {
      if (err) throw err;
  
    });
    img[1].mv("./public/prodects-images/" + id +"_1.jpg", (err, done) => {
      if (err) throw err;
  
    });
    img[2].mv("./public/prodects-images/" + id +"_2.jpg", (err, done) => {
      if (err) throw err;
  
    });
    img[3].mv("./public/prodects-images/" + id +"_3.jpg", (err, done) => {
      if (err) throw err;
  
    });

  });
  res.redirect('http://localhost:3002/AllProdects');

});

router.get("/getAllProdects", (req, res, next) => {
  prodect_helper.getAllprodects().then((data) => {
    res.send(data);
  });
});

router.get("/sPro", (req, res, next) => {
  let ctlo = req.query.cto;

  prodect_helper
    .searchProdects(ctlo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/home", (req, res, next) => {

  prodect_helper.homeProdects().then((data) => {
    res.send({ data: data });
  });

 
  
});
router.get('/delete/:id',(req,res)=>{
  let proId = req.params.id;

  console.log("sds");
prodect_helper.deleteProdect(proId).then((response)=>{
res.send(response)
})
})

router.get('/ForEditData/:id',(req,res)=>{
  let id = req.params.id
  prodect_helper.getprodctdata(id).then((response)=>{
    res.send(response)
  })
})

router.post('/editProdect/:id',(req,res)=>{
  
 
  let id = req.params.id;
  prodect_helper.PostEditedOProdectData(id,req.body).then(()=>{
    res.redirect('http://localhost:3002/AllProdects');
    if (req.files.img) {
      let img =req.files.img;

      img[0].mv("./public/prodects-images/" + id +"_0.jpg", (err, done) => {
        if (err) throw err;
    
      });
      img[1].mv("./public/prodects-images/" + id +"_1.jpg", (err, done) => {
        if (err) throw err;
    
      });
      img[2].mv("./public/prodects-images/" + id +"_2.jpg", (err, done) => {
        if (err) throw err;
    
      });
      img[3].mv("./public/prodects-images/" + id +"_3.jpg", (err, done) => {
        if (err) throw err;
    
      });    }
  })
})



module.exports = router;
