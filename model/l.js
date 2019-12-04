var mongoose=require('mongoose');
var userschema=new mongoose.Schema({
    Username:String,
    Password:String
})
var userModel=new mongoose.model("user",userschema,"userLogin");
module.exports=userModel;


