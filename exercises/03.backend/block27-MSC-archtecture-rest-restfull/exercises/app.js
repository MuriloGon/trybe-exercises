const express = require('express');
const { createValidation } = require('./middlewares/User');
const User = require('./models/mongodb/User');

const app = express();
app.use(express.json());

app.post('/user', createValidation, async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  const { insertedId: id } = await User.create(firstName, lastName, email, password);
  res.status(201).json({
    id,
    firstName,
    lastName,
    email,
    password,
  });
});

app.listen(3000, () => {
  console.log('Tô listening a porta', 3000);
});
