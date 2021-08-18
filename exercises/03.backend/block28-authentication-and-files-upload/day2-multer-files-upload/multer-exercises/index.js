require('dotenv').config();
const express = require('express');
const multer = require('multer');
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

app.get('/ping', controllers.ping);

const diskStorage = multer.diskStorage({ 
  destination: (err, file, cb) => cb(null, 'files/'),
  filename: (err, file, cb) => cb(null, file.originalname)
})
const upload = multer({ storage: diskStorage })
app.post('/upload', upload.single('file'), controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
