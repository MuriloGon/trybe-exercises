const express = require('express');
const Author = require('./controllers/Author');
const error = require('./controllers/error');

const app = express();

app.use(express.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

const PORT = process.env.PORT || 3000;

app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
