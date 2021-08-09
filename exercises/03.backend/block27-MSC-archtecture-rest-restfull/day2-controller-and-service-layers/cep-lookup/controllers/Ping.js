function getPong(_req, res) {
  res.json({ message: 'pong!' });
}

module.exports = {
  getPong,
};
