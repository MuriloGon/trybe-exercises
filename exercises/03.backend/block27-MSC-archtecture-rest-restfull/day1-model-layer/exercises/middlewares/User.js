const emailVal = require('email-validator');

function firstnameValidation(req, res, next) {
  const { firstName } = req.body;
  if (!firstName || typeof (firstName) !== 'string') {
    const error = true;
    const message = 'wrong format for firstName';
    return res.status(400).json({ error, message });
  }
  return next();
}

function lastnameValidation(req, res, next) {
  const { lastName } = req.body;
  if (!lastName || typeof (lastName) !== 'string') {
    const error = true;
    const message = 'wrong format for lastName';
    return res.status(400).json({ error, message });
  }
  return next();
}

function passwordValidation(req, res, next) {
  const { password } = req.body;

  if (!password || typeof (password) !== 'string' || password.length < 6) {
    const error = true;
    const message = "O campo 'password' deve ter pelo menos 6 caracteres";
    return res.status(400).json({ error, message });
  }
  return next();
}

function emailValidation(req, res, next) {
  const { email } = req.body;
  if (!email || typeof email !== 'string' || !emailVal.validate(email)) {
    const error = true;
    const message = 'email is incorrect';
    return res.status(400).json({ error, message });
  }
  return next();
}

const createValidation = [firstnameValidation, lastnameValidation,
  passwordValidation, emailValidation];

module.exports = {
  firstnameValidation,
  lastnameValidation,
  passwordValidation,
  emailValidation,
  createValidation,
};
