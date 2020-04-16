const db = require("../database/connection");

function getUserFromBook(bookID) {
  return db.query("SELECT user_id FROM user_books WHERE book_id = $1", [bookID])
}

module.exports = { getUserFromBook }