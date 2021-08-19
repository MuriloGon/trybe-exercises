const fs = require('fs/promises')
const { constants } = require('fs');;
const prettier = require('prettier');
const multer = require('multer');

const handleProfileFiles = multer({
  dest: `${process.env.PWD}/profilePics/`
}).fields([
  { name: 'name', maxCount: 1 },
  { name: 'email', maxCount: 1 },
  { name: 'password', maxCount: 1 },
  { name: 'bio', maxCount: 1 },
  { name: 'profilePic', maxCount: 1 },
])

async function saveProfile({ name, email, password, bio }, filename) {
  const path = `${process.env.PWD}/profiles.json`;

  let profilesArr;

  try {
    profilesArr = JSON.parse(await fs.readFile(path, { encoding: 'utf-8' }));
    if (!Array.isArray(profilesArr)) profilesArr = []
  } catch {
    profilesArr = [];
  }


  profilesArr.push({ id: filename, name, email, password, bio })
  const rawData = prettier.format(JSON.stringify(profilesArr), { parser: 'json' });
  await fs.writeFile(path, rawData);
}

function profile(req, res) {
  saveProfile(req.body, req.files['profilePic'][0].filename)
  res.status(200).end();
}

module.exports = [
  handleProfileFiles, profile
]