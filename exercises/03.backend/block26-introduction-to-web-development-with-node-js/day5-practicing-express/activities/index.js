import express from 'express';
import login from './ex01/login.js';
import btc from './ex02/btc_route.js';
import post from './ex03/posts_route.js';
import user from './ex04_ex09/user_route.js';
import operations from './ex05/operations_route.js';
import recipe from './ex06_ex07_ex10/recipe_route.js';
import comments from './ex08/comments_route.js';

const app = express();
app.use(express.json());
app.use(function(error, req, res, next) {
  if (error instanceof SyntaxError) {
    return res.status(400).json({name: error.name, msg: error.message});
  } else {
    next(error);
  }
});

app.use('/login', login);
app.use('/btc/price', btc);
app.use('/posts/', post);
app.use('/user/', user);
app.use('/:operation/:num1/:num2', operations);
app.use('/recipe', recipe);
app.use('/comments', comments);

app.listen(process.env.PORT);

export default app;
