const fs = require('fs/promises');

async function modelGetAll() {
  const path = `${process.env.PWD}/profiles.json`;
  const profiles = JSON.parse(await fs.readFile(path, { encoding: 'utf-8' }));
  return profiles;
}

async function modelGetById(id) {
  const profiles = await modelGetAll();
  const profile = profiles.find((p) => p.id === id);
  if (!profile) return null;
  return profile;
}

async function getAll(req, res) {
  const data = await modelGetAll();
  res.status(200).json(data);
}

async function getById(req, res) {
  const { id } = req.params;
  const data = await modelGetById(id);
  if(!data) return res.status(404).end();
  res.status(200).json(data);
}

module.exports = {
  getAll,
  getById
}