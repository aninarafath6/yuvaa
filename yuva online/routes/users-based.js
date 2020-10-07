const express = require('express');
const router = express.Router();
const user_helpers = require('../helpers/users-helpers')



router.post('/signup',(req,res,next)=>{
    console.log("st");
    user_helpers.doSignup(req.body).then((data)=>{
        console.log(data);
    });  
})
let responseData ={}

router.post('/login',(req,res,next)=>{
    user_helpers.doLogin(req.body).then((response)=>{
        responseData=response;
    });
})
router.get('/login',(req,res,next)=>{
    if(responseData.status){
        res.redirect('/');
  }
  else{
    res.redirect('/login');

  }
   
})




module.exports = router;
