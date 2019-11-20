const express=require('express');

const authorsRouter=express.Router();

var authors=[
    {
        name:"Chethan Bhagath",
        nationality:"Indian",
        genre:"Fiction",
    },
    {
        name:"Shakespeare",
        nationality:"UK",
        genre:"Drama",
    },
    {
        name:"Kamala Surayya",
        nationality:"Indian",
        genre:"Novels",
    },
    {
        name:"Ravinder Singh",
        nationality:"Indian",
        genre:"Romance",
    },
];

function router(nav){
    authorsRouter.route('/')
    .get(function(req,res){
        res.render('authors.ejs',
        {
            nav,
            title:"Authors",
            author
        }
        );
    });
    authorsRouter.route('/addform')
    .get(function(req,res){
        res.render('addAuthor.ejs',
        {
            nav,
            title:"Add Author"
        } 
        );
    });
    authorsRouter.route('/save')
    .post(function(req,res){
        console.log(req.body);
        res.send("inserted");
    });
    authorsRouter.route('/:id')
    .get(function(req,res){
        var i =req.params.id
        res.render('/author',
        {
            nav,
            author=authors[i]
        });
    });
    return authorsRouter;
}
module.exports=router;
