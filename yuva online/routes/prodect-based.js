const express = require("express");
const router = express.Router();
const prodect_helper = require("../helpers/prodect-helpers");

router.post("/addProdects", (req, res, next) => {
 
    const unsplittedKeywords = req.body.keywords.toString().toLowerCase();
    const splittedKeywords= unsplittedKeywords.split(",");
    const data ={
        name:req.body.name,
        canPrice:req.body.canPrice,
        offPrice:req.body.offPrice,
        off:req.body.off,
        catogary:req.body.catogary,
        keywords:splittedKeywords,
        disc:req.body.disc,


    }

  // console.log(req.body);
  console.log(req.files.img);

  prodect_helper.addProdect(data, (id) => {
    let img = req.files.img;
    img.mv("./public/prodects-images/" + id + ".jpg", (err, done) => {
      if (err) throw err;
      res.render("addedProdect");
    });
  });

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
  let user =req.session.user;
  console.log(user);

  prodect_helper.homeProdects().then((data)=>{
      const Data = [data]
      res.send({data:Data,user:user})
  });
});

module.exports = router;
