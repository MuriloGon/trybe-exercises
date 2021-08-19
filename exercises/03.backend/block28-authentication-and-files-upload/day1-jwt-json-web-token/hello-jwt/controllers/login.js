const utils = require('../utils');

function login(req, res) {
  const { username, password } = req.body;
  let admin = false;

  const admins = { admin: 's3nh4S3gur4???' };

  if (admins[username] && admins[username] === password) {
    admin = true;
  }

  const token = utils.generateToken({ username, password, admin });
  res.status(200).json({ token });
}

module.exports = login;