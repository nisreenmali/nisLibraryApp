var mongoose=require('mongoose');
var authorschema=new mongoose.Schema({
    Name:String,
    Nationality:String,
    Genre:String
})
var authorModel=new mongoose.model("addAuthor",authorschema,"newAuthor");
module.exports=authorModel;