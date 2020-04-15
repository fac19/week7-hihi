const db = require("../database/connection");

function getAllBooks() {
  return db.query("SELECT * FROM books;");
}

function getBook(id) {
  return db.query("SELECT * FROM books WHERE id = $1", [id]);
}

function addBook(title, author, fiction) {
  return db.query(
    `INSERT INTO books(title, author, fiction) VALUES($1, $2, $3)`,
    [title, author, fiction]
  );
}

module.exports = { getAllBooks, getBook, addBook };
