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

router.post('/login',(req,res)=>{
    user_helpers.doLogin(req.body).then((response)=>{
        if(response.status){
            res.redirect('localhost:3000/');

            req.session.loggedIn = true;
            req.session.user = response.user;

      }
      else{
        res.redirect('http://localhost:3000/Login');
      }
    });
})




module.exports = router;
