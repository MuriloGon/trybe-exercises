const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: { message: 'Token not found' } });

  try {
    const { data: { admin } } = jwt.verify(authorization, process.env.SECRET);
    if (!admin) return res.status(403).json({ error: { message: 'Restricted access' } });
  } catch (error) {
    const { message } = error;
    return res.status(401).json({ error: { message } });
  }
  return next();
}

module.exports = auth;