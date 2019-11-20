const express = require('express');

const booksRouter = express.Router();

var books = [
    {
        title: "The Age Of Light",
        genre: "Historical Fiction",
        author: "Lev Nicholayevich",
        image: "1.jpg",
    },
    {
        title: "Book2",
        genre: "Historical Fiction",
        author: "Victor Hugo",
        image: "2.jpg",
    },
    {
        title: "Dangerous Love",
        genre: "Historical Fiction",
        author: "Victor Hugo",
        image: "3.jpg",

    },
    {
        title: "The Guest Book",
        genre: "Historical Fiction",
        author: "Victor Hugo",
        image: "4.jpg",

    },

];

function router(nav) {
    booksRouter.route('/')
        .get(function (req, res) {
            res.render('books.ejs',
                {
                    nav,
                    title: "Books",
                    books
                }
            );
        });


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
            console.log(req.body);
            res.send("inserted");
        });

    booksRouter.route('/:id')
        .get(function (req, res) {
            var i = req.params.id
            res.render('book.ejs',
                {
                    nav,
                    book: books[i]
                }
            );
        });
    return booksRouter;
}
module.exports = router;
