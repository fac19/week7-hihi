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

module.exports = { getAllUsersHandler, addUserHandler };
