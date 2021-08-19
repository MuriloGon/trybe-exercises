const multer = require('multer');
const fs = require('fs/promises');

const storage = multer.diskStorage({
  destination: (err, file, cb) => {
    cb(null, process.env.PWD + '/uploads/');
  },
  filename: (err, file, cb) => {
    cb(null, `${file.fieldname}-${file.originalname}`)
  }
})

const uploadMutter = multer({ storage });

function multiple(req, res, next) {
  // if (req.error) res.status(403).json({ error: req.error })
  const resArrObjs = req.files.map(({ filename, originalname: file }) => ({
    file,
    url: `http://[::1]:3000/${filename}`
  }))
  res.status(200).json(resArrObjs);
}

module.exports = [uploadMutter.array('files'), multiple];