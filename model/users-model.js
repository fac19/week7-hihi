const db = require("../database/connection");

function getAllUsers() {
  return db
    .query(`SELECT id, username, cohort FROM users;`)
    .then((res) => res.rows);
}

function getUser(username) {
  return db
    .query(`SELECT * FROM users WHERE username=$1;`, [username])
    .then((res) => res.rows[0]);
}

function getUserById(id) {
  return db
    .query(`SELECT * FROM users WHERE id=$1;`, [id])
    .then((res) => res.rows);
}

function getUserById(id) {
  return db
    .query("SELECT * FROM users WHERE id=($1);", [id])
}

function addUser(username, password, cohort) {
  return db
    .query(
      `INSERT INTO users (username, password, cohort)VALUES($1, $2, $3);`,
      [username, password, cohort]
    )
    .then((res) => res.rows);
}

function getMultipleUsersById(ids) {
  const list = ids.map((e, i) => {
    return `$${i + 1}`
  });
  return db.query(`SELECT username FROM users WHERE id IN (${list});`, ids)
}

module.exports = { getAllUsers, addUser, getUser, getUserById, getMultipleUsersById };
