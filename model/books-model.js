const db = require("../database/connection");

function getAllBooks() {
  return db.query("SELECT * FROM books;");
}

function getBook(id) {
  return db.query("SELECT * FROM books WHERE id = $1;", [id]);
}

function getIdFromTitle(title) {
  return db.query("SELECT id FROM books WHERE title = $1", [title])
}

function addBook(title, author, fiction) {
  return db.query(
    `INSERT INTO books(title, author, fiction) VALUES($1, $2, $3);`,
    [title, author, fiction]
  );
}

function deleteBook() {
  // remove book from database
}

function updateBook(id, update) {
  // update book in the databse
}

module.exports = { getAllBooks, getBook, addBook, deleteBook, getIdFromTitle };
