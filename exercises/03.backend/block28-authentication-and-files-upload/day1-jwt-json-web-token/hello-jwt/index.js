require('dotenv').config();
const express = require('express');
const cors = require('cors');

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.post('/login', middlewares.loginBodyValidation, controllers.login);

app.post('/signup', middlewares.loginBodyValidation, controllers.signup);

app.get('/users/me', controllers.usersMe);

app.get('/top-secret', middlewares.admin, controllers.topSecret);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
