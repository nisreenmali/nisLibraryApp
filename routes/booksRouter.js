const express = require('express');
var mongoose=require('mongoose');
var bookModel=require('../model/b');
var url="mongodb://127.0.0.1:27017/library1db";
const booksRouter = express.Router();
mongoose.connect(url,function(err){
    if(err) throw err
    else{
        console.log("connection established");
    }
})
function router(nav) {
    booksRouter.route('/')
        .get(function (req, res) {
           bookModel.find({},function(err,data){
               if(err)throw err
               else{
           console.log(data)
           res.render('books.ejs',
           {
            nav,
            title: "Books",
            books:data
             });
}
        })
        })
         
    booksRouter.route('/addform')
        .get(function (req, res) {//callback
            
            res.render('addBooks.ejs',
                {
                    nav,
                    title: "Add Books"
                }
            );
        });

    booksRouter.route('/save')
        .post(function (req, res) {
            // console.log(req.body);
            // res.send("inserted");
            var newbook=new bookModel();
newbook.Title=req.body.title;
newbook.Author=req.body.author;
newbook.Genre=req.body.genre;
newbook.save(function(err){
if(err) throw err
else{
    res.send('Data Added');
}
})
})

    booksRouter.route('/:id')
        .get(function (req, res) {
            bookModel.find({},function(err,data){
            var i = req.params.id
            res.render('book.ejs',
                {
                    nav,
                    book: data[i]
                }
            );
            })
        });
    return booksRouter;
     } ;
module.exports = router;
