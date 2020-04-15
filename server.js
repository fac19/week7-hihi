const express = require("express");
const PORT = process.env.PORT || 3000;
const {
  getAllBooksHandler,
  getBookIdHandler,
  addBookHandler,
} = require("./handlers/books-handler");
const {
  getAllUsersHandler,
  addUserHandler,
} = require("./handlers/users-handler");

const server = express();

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// BOOK ROUTES
server.get("/books", getAllBooksHandler);
server.get("/books/:id", getBookIdHandler);
server.post("/books", addBookHandler);

// USER ROUTES
server.get("/users", getAllUsersHandler);
server.post("/users", addUserHandler);
