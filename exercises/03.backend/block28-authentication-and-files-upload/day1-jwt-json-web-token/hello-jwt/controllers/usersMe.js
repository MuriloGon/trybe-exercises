const jwt = require('jsonwebtoken');

function usersMe(req, res) {
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization) return res.status(401).json({ error: { message: 'Token not found' } });

  try {
    const { data: { username, admin } } = jwt.verify(authorization, process.env.SECRET);
    return res.status(200).json({ username, admin });
  } catch (error) {
    return res.status(401).json({ error: { message: error.message } });
  }
}

module.exports = usersMe;