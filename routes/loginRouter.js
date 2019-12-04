const express = require('express');
var mongoose=require('mongoose');
var userModel=require('../model/l')
var url="mongodb://127.0.0.1:27017/library1db";
const loginRouter = express.Router();
mongoose.connect(url,function(err){
    if(err) throw err
    else{
        console.log("connection established");
    }
})
function router(nav) {
    loginRouter.route('/')
        .get(function (req, res) {
            res.render('login.ejs',
                {
                    nav,
                    title: "Login"

                });
        });
    loginRouter.route('/save')
        .post(function (req, res) {
            userModel.findOne({Username:req.body.uname,Password:req.body.psw},function(err,data){
                if(err)throw err 
                else{
                    res.send("Login Successfully")
                }
            // console.log(req.body);
            // res.send("inserted");
        });
    })
    return loginRouter;
}
module.exports = router;