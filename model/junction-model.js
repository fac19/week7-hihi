const db = require("../database/connection");

function getUserFromBook(bookID) {
  return db.query("SELECT user_id FROM user_books WHERE book_id = $1", [bookID])
}

function getBooksFromUser(userId) {
  return db.query("SELECT book_id FROM user_books WHERE user_id = $1", [userId]);
}

module.exports = { getUserFromBook, getBooksFromUser }