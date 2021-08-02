const express = require('express');
const fs = require('fs/promises');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile('./simpson.json', { encoding: 'utf-8' }));
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get('/:id', (req, res) => {
  
});

module.exports = router;
