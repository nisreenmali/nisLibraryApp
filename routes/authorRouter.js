const express = require('express');
var mongoose=require('mongoose');
var authorModel=require('../model/a');
var url="mongodb://127.0.0.1:27017/library1db";
const authorRouter = express.Router();
mongoose.connect(url,function(err){
    if(err) throw err
    else{
        console.log("connection established");
    }
})
function router(nav) {
    authorRouter.route('/')
        .get(function (req, res) {
        authorModel.find({},function(err,data){
            if(err)throw err
            else{
            console.log(data)
            res.render('authors.ejs',
            {
             nav,
             title: "Authors",
             authors:data
            });
               }
                 })
                   })
    authorRouter.route('/addform')
        .get(function (req, res) {
            res.render('addAuthor.ejs',
                {
                    nav,
                    title: "Add Author"
                }
            );
        });
    authorRouter.route('/save')
        .post(function (req, res) {
            // console.log(req.body);
            // res.send("inserted");
            var newauthor=new authorModel();
newauthor.Name=req.body.name;
newauthor.Nationality=req.body.nationality;
newauthor.Genre=req.body.genre;
newauthor.save(function(err){
if(err) throw err
else{
    res.send('Data Added');
}
})
        })
    authorRouter.route('/:id')
        .get(function (req, res) {
            authorModel.find({},function(err,data){
            var i = req.params.id
            res.render('author.ejs',
                {
                    nav,
                    author: data[i]
                });
            })
        });
    return authorRouter;
}
module.exports = router;
