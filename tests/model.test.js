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

console.group("User Tests")
test("Tests running") {};
test("Can add new user") {};
test("Can get user from username") {};
test("Can get all users that have read a specific book") {};
console.groupEnd("User Tests");

console.group("Book Tests");
test("Can add new book") {};
test("Can all books from specific user") {};
test("Can delete book") {};
test("Can update book information") {};
console.groupEnd("Book Tests");