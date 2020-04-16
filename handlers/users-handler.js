const usersModel = require("../model/users-model");
const booksModel = require("../model/books-model");
const junctionModel = require("../model/junction-model");


const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcryptjs");

function getAllUsersHandler(req, res, next) {
  usersModel
  .getAllUsers()
  .then((allUsers) => {
    res.send(allUsers);
  })
  .catch(next);
}

function addUserHandler(req, res, next) {
  let password = req.body.password;
  bcrypt
  .genSalt(10)
  .then((salt) => bcrypt.hash(password, salt))
  .then((hash) => {
    usersModel
    .addUser(req.body.username, hash, req.body.cohort)
    .then((newUser) => {
      const payload = { newUser: newUser.id };
      newUser.access_token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
      res.status(201).send(newUser);
    });
  })
  .catch(next);
}

function loginHandler(req, res, next) {
  const password = req.body.password;
  usersModel
  .getUser(req.body.username)
  .then((user) => {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        const error = new Error("Input password does not match database");
        error.status = 401;
        next(error);
      } else {
        const payload = { user: user.id };
        const token = jwt.sign(payload, SECRET, { expiresIn: "24h" });
        res.status(200).send({ access_token: token });
      }
    });
  })
  .catch(next);
}

function getAllReadersHandler(req, res, next) {
  const book = req.params.book;
  booksModel
  .getIdFromTitle(book)
  .then((bookInfo) => {
    const bookId = bookInfo.rows[0].id
    junctionModel
    .getUserFromBook(bookId)
    .then((userInfo) => {
      // const userIds = userInfo.rows.map(obj => obj.id)
      // console.log(userIds)
      
    })
  })
  
  /* 
  1. get book id with book name from books table
  2. get all user id's that match book id from junction table
  3. with list of user id's, get list of user names from users table
  */
  
}

module.exports = {
  getAllUsersHandler,
  addUserHandler,
  loginHandler,
  // logoutHandler,
  getAllReadersHandler
};
