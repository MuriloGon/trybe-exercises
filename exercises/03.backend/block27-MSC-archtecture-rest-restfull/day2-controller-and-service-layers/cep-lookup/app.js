require('dotenv').config();
const express = require('express');
const Ping = require('./controllers/Ping');

const app = express();

app.get('/ping', Ping.getPong);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
