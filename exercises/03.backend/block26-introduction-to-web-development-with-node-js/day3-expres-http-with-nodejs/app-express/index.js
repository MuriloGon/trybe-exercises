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

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (name && age && !isNaN(age) && typeof name === 'string') {
    if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
    else return res.status(401).json({ message: 'Unauthorized' });
  } else return res.status(400).json({ message: 'Wrong parameter' });
});

app.put('/users/:name/:age', (req, res) => {
  const { age, name } = req.params;
  console.log(req.params);
  if (name && age && !isNaN(age)) {
    return res.status(200).json({
      message: `Seu nome é ${name} e você tem ${age} anos de idade`
    });
  }
  return res.status(400).json({ message: 'Wrong parameter' });
});

app.listen(3000, () => {
  console.log('Running on port 3000 !!');
});
