const express = require("express");
const PORT = process.env.PORT || 3000;
const errorMiddleware = require("./middleware/error");
const authMiddleware = require("./middleware/auth");

const {
  getAllBooksHandler,
  getBookIdHandler,
  addBookHandler,
  deleteBookHandler,
  updateBookHandler,
  getAllUserBooksHandler,
  getAllFictionHandler,
  getAllNonFictionHandler,
} = require("./handlers/books-handler");
const {
  getAllUsersHandler,
  addUserHandler,
  loginHandler,
  // logoutHandler,
  getAllReadersHandler,
} = require("./handlers/users-handler");

// const bodyparser = require("body-parser")

const server = express();

server.use(express.json());
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// BOOK ROUTES
server.get("/books/non-fiction", getAllNonFictionHandler);
server.get("/books/fiction", getAllFictionHandler);
server.get("/books/:id", getBookIdHandler);
server.put("/books/:id", authMiddleware, updateBookHandler);
//server.get("/:user/books", getAllUserBooksHandler); NOT WORKING PLS HELP
server.get("/:book/users", getAllReadersHandler);
server.delete("/books/:id", authMiddleware, deleteBookHandler);

server.get("/books", getAllBooksHandler);
server.post("/books", authMiddleware, addBookHandler);

// USER ROUTES
server.get("/users", getAllUsersHandler);
server.post("/users", addUserHandler);
server.post("/login", loginHandler);
// server.post("/logout", authMiddleware, logoutHandler);

server.use((req, res, next) => {
  const error = new Error("Resource Not Found");
  error.status = 404;
  next(error);
});

server.use(errorMiddleware);