const express = require('express');

const MovieController = require('./controllers/movieController');

const app = express();
app.use('/', express.static(`${__dirname}/public`));

app.use(express.json());

app.get('/movies', MovieController.getAll);

app.post('/movies', MovieController.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
