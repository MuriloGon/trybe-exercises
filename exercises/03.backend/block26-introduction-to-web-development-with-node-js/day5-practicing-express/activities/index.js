import express from 'express';
import login from './ex01/login.js';
import btc from './ex02/btc_route.js';
import post from './ex03/posts_route.js';
import user from './ex04/user_route.js';
import operations from './ex05/operations_route.js';

const app = express();

app.use('/login', login);
app.use('/btc/price', btc);
app.use('/posts/', post);
app.use('/user/', user);
app.use('/:operation/:num1/:num2', operations);

app.listen(process.env.PORT);

export default app;
