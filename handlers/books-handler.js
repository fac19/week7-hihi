const booksModel = require('../model/books-model');

function getAllBooksHandler (req, res, next) {
  booksModel.getAllBooks()
    .then(allBooks => {
      res.send(allBooks);
    })
    .catch(next);
};

function getBookIdHandler(req, res, next){
  booksModel.getBook(req.params.id)
    .then(book => {
      res.send(book);
    })
    .catch(next);
};

function addBookHandler(req, res, next) {
  booksModel.addBook(req.body)
    .then(newBook => {
        res.status(200).send(newBook)
    })
    .catch(next);
}

module.exports = { 
    getAllBooksHandler, 
    getBookIdHandler,
    addBookHandler
};