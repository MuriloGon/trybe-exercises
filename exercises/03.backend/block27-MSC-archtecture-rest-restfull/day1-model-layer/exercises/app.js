const express = require('express');
const { createValidation } = require('./middlewares/User');
// const Model = require('./models/mongodb/User');
const Model = require('./models/mysql/User');

const app = express();
app.use(express.json());

app.post('/user', createValidation, async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  const id = await Model.create(firstName, lastName, email, password);
  res.status(201).json({
    id,
    firstName,
    lastName,
    email,
    password,
  });
});

app.get('/user', async (_req, res) => {
  const data = await Model.getAll();
  res.json(data);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const data = await Model.getById(id);
  res.json(data);
});

app.put('/user/:id', createValidation, async (req, res) => {
  const { id } = req.params;
  const {
    firstName, lastName, email, password,
  } = req.body;

  const matches = await Model.updateById(id, firstName, lastName, email, password);
  if (matches === null) return res.status(400).json({ error: true, message: 'id inválido' });

  if (matches === 0) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }

  return res.json({
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
