const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  const message = 'pong';
  res.status(200).json({ message });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}` });
});

app.listen(3000, () => {
  console.log('Running on port 3000 !!');
});
