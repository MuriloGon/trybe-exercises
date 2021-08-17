const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || 'localsecret';

function generateToken(data, duration = '1h') {
  const options = {
    expiresIn: duration,
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data }, secret, options);
  return token;
}

module.exports = generateToken;