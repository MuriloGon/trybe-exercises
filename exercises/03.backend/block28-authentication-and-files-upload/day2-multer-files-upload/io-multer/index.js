require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

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
app.use(express.static(__dirname + '/uploads'));

const uploadStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => {
    console.log(file);
    // cb(null, `${file.originalname}-${Number(new Date())}`)
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: uploadStorage });
app.post('/files/upload', upload.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file })
);

const envios = multer({ dest: 'envios' });
app.post('/envios', envios.array('file'), (req, res) =>
  res.status(200).json({ body: req.body, files: req.files })
);

app.get('/ping', controllers.ping);


app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
