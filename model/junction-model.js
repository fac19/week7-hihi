const db = require("../database/connection");

function getUserFromBook(bookID) {
  return db
    .query("SELECT user_id FROM user_books WHERE book_id = $1", [bookID])
    .then((res) => {
      res.rows;
    });
}

function getBooksFromUser(userId) {
  return db
    .query("SELECT book_id FROM user_books WHERE user_id = $1", [userId])
    .then((res) => res.rows);
}

module.exports = { getUserFromBook, getBooksFromUser };
