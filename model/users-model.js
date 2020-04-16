const db = require("../database/db");

function getAllUsers() {
  return db.query("SELECT (id, username, cohort) FROM users;");
}

function getUser(username) {
  return db.query("SELECT * FROM users WHERE username=($1);", [username]);
}

function addUser(username, password, cohort) {
  return db.query(
    "INSERT INTO users (username, password, cohort)VALUES($1, $2, $3);",
    [username, password, cohort]
  );
}

module.exports = { getAllUsers, addUser, getUser };
