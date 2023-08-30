
const User = require('../models/userModel');
const registerValidator = require('../validation/accountValidation').registerValidator;

exports.userCreate = function(req, res) {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password
  });

  const { errors, isValid } = registerValidator(newUser);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  newUser.save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
};