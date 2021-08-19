const model = require('../model');
const { generateToken } = require('../utils');

async function signup(req, res) {
  const { username, password } = req.body;
  const randomNum = Math.round(Math.random() * 50);
  const admin = randomNum > 0;

  const result = await model.users.createUser(username, password, admin);
  if (!result) {
    const userExists = { error: { message: 'user already exists' } };
    return res.status(409).json(userExists);
  }
  const token = generateToken({ username, admin }, '1h');
  return res.status(201).json({ message: 'user created', token });
} 

module.exports = signup;