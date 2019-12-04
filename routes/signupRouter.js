const express = require('express');
var mongoose=require('mongoose');
var signupModel=require('../model/s')
var url="mongodb://127.0.0.1:27017/library1db";
const signupRouter = express.Router();
mongoose.connect(url,function(err){
    if(err) throw err
    else{
        console.log("connection established");
    }
})
function router(nav) {
    signupRouter.route('/')
        .get(function (req, res) {
            res.render('signup.ejs',
                {
                    nav,
                    title: "SignUp"

                });
        });
    signupRouter.route('/save')
        .post(function (req, res) {
            // console.log(req.body);
            // res.send("inserted");
            var newuser=new signupModel();
            newuser.Email=req.body.email;
            newuser.Password=req.body.psw;
            newuser.RPassword=req.body.repeat;
            newuser.save(function(err){
            if(err) throw err
            else{
                res.send('Data Added');
            }
            })  
        });
    return signupRouter;
}
module.exports = router;