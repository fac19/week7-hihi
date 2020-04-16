const jwt = require("jsonwebtoken");
const userModel = require("../model/users-model");
const dotenv = require("dotenv");
dotenv.config();
const SECRET = process.env.JWT_SECRET;

function verifyUser(req, res, next) {
  const authHeader = req.headers.authorization;
  if ( !authHeader ) {
    const error = new Error("Auth token required")
    error.status = 404
    next(error)
  } else {
    const token = authHeader.replace("Bearer ", "")
    try {
      const tokenData = jwt.verify(token, SECRET)
      userModel
        .getUserById(tokenData.user)
        .then((user) => {
          req.user = user;
          next()
        })
        .catch(next)
    } catch (_err) {
      const error = new Error('Not authorized')
      error.status = 401
      next(error)
    }
  }
}

module.exports = verifyUser;
