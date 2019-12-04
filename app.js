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
        link:'/authors/addform',
        title:'Add Author'
    },
    {
        link:'/signup',
        title:'SignUp'
    },
    {
        link:'/login',
        title:'login'
    }
];
var booksRouter=require('./routes/booksRouter')(nav);
var authorRouter=require('./routes/authorRouter')(nav);
var signupRouter=require('./routes/signupRouter')(nav);
var loginRouter=require('./routes/loginRouter')(nav);

app.use(express.static(path.join(__dirname,"/public")));
//to use the style and js and other static files
app.use( bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

// app.set('views','./src/views');
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
