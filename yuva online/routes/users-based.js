const express = require("express");
const router = express.Router();
const user_helpers = require("../helpers/users-helpers");
var jwt = require("jsonwebtoken");
var validUser = require("../helpers/valid-user");
var tokendecoded = require("../helpers/tokendecoded");

router.post("/signup", (req, res, next) => {
  console.log("st");
  user_helpers.doSignup(req.body).then((data) => {
    console.log(data);
  });
});

router.post("/login", (req, res) => {
  user_helpers.doLogin(req.body).then((response) => {
    if (response.status) {
      let data = {
        id: response.user._id,
        name: response.user.name,
      };
      let token = jwt.sign(data, "key", { expiresIn: 86400 });
      response.token = token;

      res.send(response);
    } else {
      res.send({ loggin: false });
    }
  });
});

router.get("/addTocart/:id", validUser, (req, res) => {
  tokendecoded(req.headers.authorazation).then(async (userData) => {
    user_helpers.addTocart(req.params.id, userData.id);
    res.send({ loggin: true });
  });
});

router.get("/cart", validUser, (req, res) => {
  tokendecoded(req.headers.authorazation).then(async (userData) => {
  user_helpers.getCartProdect(userData.id).then((cart)=>{
    user_helpers.getCartCount(userData.id).then((cartCount)=>{
      res.send({ cartItems: cart,cartCount:cartCount, loggin: true });

    })

  })
 
  });
});


router.post('/incQnty',(req,res)=>{
  user_helpers.qntyIncrymentAnddecriment(req.body).then((response)=>{
    res.send({status:true,removed:response.removed})
  })

})
router.get("/usereHdder", (req, res, next) => {
  let auth = req.headers.authorazation;

  if (auth == undefined || auth.split(" ").length == 1) {
    console.log(auth);

    res.send({ user: false });
  } else {
  
    tokendecoded(req.headers.authorazation).then(async (userData) => {

      if(userData ==undefined){
console.log("wdsad");
        res.send({ user: false });

      }else{
        user_helpers.getCartCount(userData.id).then((cartCount)=>{
          console.log(cartCount);
          res.send({ user: userData,cartCount:cartCount });
  
        })
      }
    
    })
    

  }
});


router.post('/removeFromCart',(req,res)=>{
  user_helpers.removeFromCart(req.body).then((rseponse)=>{
    res.send({status:true,rseponse:rseponse})
  })

})
router.get('/priceTracker',validUser,(req,res)=>{
  tokendecoded(req.headers.authorazation).then((userData)=>{
    user_helpers.priceTracker(userData.id).then((response)=>{
      let saved = response.totalMRP-response.totalOffPrice ;
      console.log(saved);
      res.send({status:true,YRP:response.totalOffPrice,mrp:response.totalMRP,saved:saved})

    })

  })

})

module.exports = router;
