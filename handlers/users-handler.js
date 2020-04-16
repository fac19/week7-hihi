const usersModel = require("../model/users-model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcrypt.js");

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
  bcrypt.genSalt(10)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hash) => {
      usersModel
        .addUser(req.body.username, hash, req.body.cohort)
        .then((newUser) => {
          const payload = { newUser: newUser.id };
          newUser.access_token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
          res.status(200).send(newUser);
        })
        .catch(next);
  }
}


function loginHandler(req, res, next) {
  // login checking token
}

function logoutHandler(req, res, next) {
  // logout
}

function getAllReadersHandler(req, res, next) {
  // get all users that have read a specific book
}

module.exports = {
  getAllUsersHandler,
  addUserHandler,
  loginHandler,
  logoutHandler,
  getAllReadersHandler,
};
