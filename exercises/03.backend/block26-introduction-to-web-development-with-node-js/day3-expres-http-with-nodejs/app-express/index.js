const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();

app.get('/ping', (req, res) => {
  const message = 'pong';
  res.status(200).json({ message });
});

app.listen(3000, () => {
  console.log('Running on port 3000 !!');
});
