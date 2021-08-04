const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}
console.log(generateToken())
module.exports = generateToken;