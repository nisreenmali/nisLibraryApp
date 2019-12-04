var mongoose=require('mongoose');
var bookschema=new mongoose.Schema({
    Title:String,
    Author:String,
    Genre:String
})
var bookModel=new mongoose.model("addBook",bookschema,"bookUser");
module.exports=bookModel;