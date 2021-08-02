const generateToken = require('./generateToken');

module.exports = function (req, res, next) {
  const { Authorization } = req.body;

  if (typeof Authorization !== 'string' || Authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
}