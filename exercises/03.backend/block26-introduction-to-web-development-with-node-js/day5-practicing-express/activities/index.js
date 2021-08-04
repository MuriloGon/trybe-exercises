import express from 'express';
import login from './ex1/login.js';

const app = express();

app.use('/login', login);

app.listen(process.env.PORT);

export default app;
