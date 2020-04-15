const usersModel = require("../model/users-model");

function getAllUsersHandler(req, res, next) {
  usersModel
    .getAllUsers()
    .then((allUsers) => {
      res.send(allUsers);
    })
    .catch(next);
}

function addUserHandler(req, res, next) {
  usersModel
    .addUser(req.body.username, req.body.password, req.body.cohort)
    .then((newUser) => {
      res.status(200).send(newUser);
    })
    .catch(next);
}

function loginHandler (req, res, next) {
  // login checking token
}

function logoutHandler (req, res, next) {
  // logout
}

function getAllReadersHandler (req, res, next) {
  // get all users that have read a specific book
}

module.exports = { 
  getAllUsersHandler, 
  addUserHandler, 
  loginHandler, 
  logoutHandler,
  getAllReadersHandler 
};
