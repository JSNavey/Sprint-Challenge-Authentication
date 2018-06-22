const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User
    .create(req.body)
    .then(newUser => {
      res.status(201).json(newUser)
    })
    .catch(error => {
      res.status(500).json(error)
    })
};

module.exports = {
  createUser
};
