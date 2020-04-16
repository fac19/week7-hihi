const test = require("tape");
const db = require("../database/connection");
const build = require("../database/db");
const {
  getAllBooks,
  getBook,
  addBook,
  deleteBook,
} = require("../model/books-model");
const { getAllUsers, addUser, getUser } = require("../model/users-model");

// test("Tests running") {};

// USER TESTS
test("Can add new user", (t) => {
  build().then(() => {
    addUser("vatsal", "ilovegregor", 19)
      .then(() =>
        getAllUsers().then((users) => {
          const latestUser = users[users.length - 1]
          t.equal(latestUser.username, "vatsal"), t.end();
        })
      )
  })
});

// test("Can get user from username") {};
// test("Can get all users that have read a specific book") {};

// BOOK TESTS
// test("Can add new book") {};
// test("Can all books from specific user") {};
// test("Can delete book") {};
// test("Can update book information") {};