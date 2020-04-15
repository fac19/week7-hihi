const booksModel = require("../model/books-model");

function getAllBooksHandler(req, res, next) {
  booksModel
    .getAllBooks()
    .then((allBooks) => {
      res.send(allBooks);
    })
    .catch(next);
}

function getBookIdHandler(req, res, next) {
  booksModel
    .getBook(req.params.id)
    .then((book) => {
      res.send(book);
    })
    .catch(next);
}

function addBookHandler(req, res, next) {
  booksModel
    .addBook(req.body.title, req.body.author, req.body.fiction)
    .then((newBook) => {
      res.status(200).send(newBook);
    })
    .catch(next);
}

function deleteBookHandler(req, res, next) {
  booksModel.deleteBook(req.params.id)
    .then(res.status(204).send())
    .catch(next);
};

function updateBookHandler(req, res, next) {
  booksModel.updateBook(req.params.id, req.body)
    .then(updatedBook => {
      res.status(200).send(updatedBook)
    })
    .catch(next);
};

function getAllUsersBooksHandler(req, res, next) {
  // send request to model function that returns all books read by specific user
}

function getAllFictionHandler (req, res, next) {
  // send request to model function that returns all fiction books
}

function getAllNonFictionHandler(req, res, next) {
  // send request to model function that returns all non-fiction books
}

module.exports = { 
    getAllBooksHandler, 
    getBookIdHandler,
    addBookHandler,
    deleteBookHandler,
    updateBookHandler,
    getAllUsersBooksHandler,
    getAllFictionHandler,
    getAllNonFictionHandler
};
