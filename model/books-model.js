const db = require("../database/connection");

function getAllBooks() {
  return db.query("SELECT * FROM books;").then((res) => res.rows);
}

function getBook(id) {
  return db
    .query("SELECT * FROM books WHERE id = $1;", [id])
    .then((res) => res.rows[0]);
}

function addBook(title, author, fiction) {
  return db.query(
    `INSERT INTO books(title, author, fiction) VALUES($1, $2, $3);`,
    [title, author, fiction]
  );
}

function deleteBook(id) {
  return db.query(`DELETE FROM books WHERE id=$1`, [id]);
}

function updateBook(id, title, author, fiction) {
  return db.query(
    `UPDATE books SET title=$2, author=$3, fiction=$4 WHERE id=$1`,
    [id, title, author, fiction]
  );
}

module.exports = { getAllBooks, getBook, addBook, deleteBook, updateBook };
