const express = require('express');

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// app.use('/products', require('./controllers/productController'));
app.use('/products', (req, res) => {
  console.log(req.body);
  res.status(200).json({ body: req.body });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
