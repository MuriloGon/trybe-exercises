const multer = require('multer');
const fs = require('fs/promises');

const storage = multer.diskStorage({
  destination: (err, file, cb) => {
    cb(null, process.env.PWD + '/files/');
  },
  filename: (err, file, cb) => {
    cb(null, `${Number(new Date())}-${file.originalname}`);
  }
})

const uploadMutter = multer({
  storage, fileFilter: async (req, file, cb) => {
    const extension = file.originalname.match(/\.([a-zA-Z]+)$/)[1].toLocaleLowerCase();
    if (extension !== 'png') {
      req.error = { message: 'Extension must be `png`' };
      return cb(null, false);
    }

    const files = await fs.readdir(process.env.PWD + '/files/');
    const hasDuplicate = files.some((fullname) => {
      const name = fullname.match(/\d+-([\s\S]+)/)[1];
      console.log({fullname, name})
      return name === file.originalname;
    })

    if (hasDuplicate) {
      req.error = { message: 'File already exists' };
      return cb(null, false);
    }

    cb(null, true);
  }
})

function upload(req, res, next) {
  if (req.error) res.status(403).json({ error: req.error })
  res.status(200).end();
}

module.exports = [uploadMutter.single('file'), upload];