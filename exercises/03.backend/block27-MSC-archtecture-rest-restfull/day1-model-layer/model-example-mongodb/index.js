const express = require('express');
const Author = require('./models/Authors');
const Books = require('./models/Books');

const app = express();
app.use(express.json());

// Authors
app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) {
    return res.status(404).json({ message: 'Not found' });
  }

  return res.status(200).json(author);
});
app.post('/authors', async (req, res) => {
  const { first_name: firstname, middle_name: middlename, last_name: lastname } = req.body;

  if (!Author.isValid(firstname, middlename, lastname)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(firstname, middlename, lastname);

  return res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

// Books
app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.get('/books/:id(\\d+)', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByAuthorId(id);
  if (!books) {
    return res.status(404).json({ message: 'Not found' });
  }

  return res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id: authorId } = req.body;
  try {
    await Books.create(title, authorId);
  } catch {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  return res.status(201).json({ msg: 'livro criado com sucesso' });
});

// Server Listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
