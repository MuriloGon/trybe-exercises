function topSecret(req, res) {
  res.status(200).json({ secretIndo: 'Peter Parker is the Spider-Man' });
}

module.exports = topSecret;