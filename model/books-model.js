const db = require("../database/db");

function getAllBooks() {
  // return db.select (all books)
}

function getBook() {
  // return db.select (book by id)
}

function addBook() {
  // add new book to database
}

function deleteBook() {
  // remove book from database
}

function updateBook(id, update) {
  // update book in the databse
}

module.exports = { getAllBooks, getBook, addBook, deleteBook };