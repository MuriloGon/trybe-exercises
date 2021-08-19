require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/files'));
app.use(express.static(__dirname + '/uploads'));

app.get('/ping', controllers.ping);

app.post('/upload', ...controllers.upload);

app.post('/multiple', ...controllers.multiple);

app.post('/profile', ...controllers.profile);

app.get('/profiles/:id', controllers.profiles.getById);

app.get('/profiles', controllers.profiles.getAll);


app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
