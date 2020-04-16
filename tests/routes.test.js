const test = require("tape");
const serverRequest = require("supertest");
const db = require("../database/connection");
const server = require("../server");
const build = require("../database/db");

// test("Server responds with array of all books when get request is made to /books route", t => {
//   build().then(() => {
//     serverRequest(server)
//       .get("/books")
//       .expect(200)
//       .end((err, res) => {
//         t.error(err);
//         t.equal(res.length, 3);
//         t.end();
//       })
//   }).catch(console.error);
// });
// THIS TESTING IS CURRENTLY FAILING - UNHANDLED PROMISE REJECTION!