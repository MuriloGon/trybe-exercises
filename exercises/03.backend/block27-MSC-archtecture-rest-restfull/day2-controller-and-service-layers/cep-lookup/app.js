require('dotenv').config();
const express = require('express');
const Ping = require('./controllers/Ping');
const Cep = require('./controllers/Cep');
const validateCep = require('./middlewares/validateCep');

const app = express();
app.use(express.json());

app.get('/ping', Ping.getPong);

app.get('/cep/:cep', validateCep, Cep.getCEP);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
