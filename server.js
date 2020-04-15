const express = require("express");
const PORT = process.env.PORT || 3000;
const { 
  getAllBooksHandler, 
  getBookIdHandler, 
  addBookHandler,
  deleteBookHandler,
  updateBookHandler,
  getAllUsersBooksHandler,
  getAllFictionHandler,
  getAllNonFictionHandler
} = require("./handlers/books-handler");
const { 
  getAllUsersHandler, 
  addUserHandler,
  loginHandler,
  logoutHandler,
  getAllReadersHandler
} = require("./handlers/users-handler");

const server = express();

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// BOOK ROUTES
server.get("/books", getAllBooksHandler);
server.get("/books/:id", getBookIdHandler);
server.post("/books", addBookHandler);
server.delete("/books/:id", deleteBookHandler);
server.put("/books/:id", updateBookHandler);
server.get("/:user/books", getAllUsersBooksHandler);
server.get("/books/fiction", getAllFictionHandler);
server.get("/books/non-fiction", getAllNonFictionHandler);

// USER ROUTES
server.get("/users", getAllUsersHandler);
server.post("/users", addUserHandler);
server.post("/login", loginHandler);
server.post("/logout", logoutHandler);
server.get("/:book/users", getAllReadersHandler);