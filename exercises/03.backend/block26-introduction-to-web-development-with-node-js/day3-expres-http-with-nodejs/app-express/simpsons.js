const express = require('express');
const fs = require('fs/promises');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await fs.readFile('./simpson.json', { encoding: 'utf-8' })
    return res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
});

module.exports = router;
