var express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
var chalk=require('chalk');
var path=require('path');

var app=new express();//obj creation
var nav=[
    {
        link:'/books',
        title:'Books'
    },
    {
        link:'/authors',
        title:'Authors'
    },
    {
        link:'/books/addform',
        title:'Add Books'
    },
    {
        link:'/author/addform',
        title:'Add Author'
    }
];
var booksRouter=require('./src/routes/booksRouter')(nav);
var authorRouter=require('./src/rotes/aothorRouter')(nav);

app.use(express.static(path.join(__dirname,"/public")));
//to use the style and js and other static files
app.use( bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/books',booksRouter);
app.use('/author',authorRouter);

app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/',function(req,res){
// res.render('index.ejs',{list:['book1','book2','book3'],title:"Library"});
res.render('index.ejs',
    {
        nav,
        title:"Library"
    }
   );
});
app.listen(3000,function(){
    console.log('Listening to Port ' + chalk.red(3000));
});
