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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  let data;
  try {
    data = JSON.parse(await fs.readFile('./simpson.json', { encoding: 'utf-8' }));
  } catch (error) { return res.status(500).send(error.message); };

  const index = data.findIndex(({ id: idData }) => idData === id);
  if (index >= 0) return res.status(200).json(data[index]);
  return res.status(404).json({ message: 'Id não encontrado' })
});

module.exports = router;
