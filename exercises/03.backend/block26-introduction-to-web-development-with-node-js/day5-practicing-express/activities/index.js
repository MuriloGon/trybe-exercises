import express from 'express';
import login from './ex01/login.js';
import btc from './ex02/btc_route.js';

const app = express();

app.use('/login', login);
app.use('/btc/price', btc);

app.listen(process.env.PORT);

export default app;
