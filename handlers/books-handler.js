const booksModel = require("../model/books-model");
const junctionModel = require("../model/junction-model");
const usersModel = require("../model/users-model");

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
  booksModel.deleteBook(req.params.id).then(res.status(204).send()).catch(next);
}

function updateBookHandler(req, res, next) {
  booksModel
    .updateBook(
      req.params.id,
      req.body.title,
      req.body.author,
      req.body.fiction
    )
    .then(() => {
      res.status(200).send();
    })
    .catch(next);
}


/*
//All of the books read by a specific user. 
function getAllUserBooksHandler(req, res, next) {
  // console.log(req.params.user);
  usersModel
    .getIdFromUsername(req.params.user)
    .then((userId) => {
      console.log("USER ID: ", userId);
      junctionModel
        .getBooksFromUser(userId)
        .then(bookList => {
          const books = bookList.rows.map(e => e.title);
          console.log(books);
          res.status(200).send(books);
        })
    })
    .catch(next);
}
*/

function getAllFictionHandler(req, res, next) {
  booksModel
    .getBooksByType(true)
    .then((fiction) => {
      res.status(200).send(fiction.rows)
    })
    .catch(next)
}

function getAllNonFictionHandler(req, res, next) {
  booksModel
    .getBooksByType(false)
    .then((nonfiction) => {
      res.status(200).send(nonfiction.rows)
    })
    .catch(next)
}

module.exports = {
  getAllBooksHandler,
  getBookIdHandler,
  addBookHandler,
  deleteBookHandler,
  updateBookHandler,
  getAllUserBooksHandler,
  getAllFictionHandler,
  getAllNonFictionHandler,
};
