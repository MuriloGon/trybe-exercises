const { createCEP } = require('../models/Ceps');
const Ceps = require('../services/Ceps');

async function getCEP(req, res) {
  const { cep } = req.params;
  const ceps = new Ceps();
  const data = await ceps.getCepByCep(cep);
  const { status, error } = data;
  if (status) return res.status(status).json(error);
  return res.json(data);
}

async function postCEP(req, res) {
  const {
    cep, logradouro, bairro, localidade, uf,
  } = req.body;

  const data = await createCEP(cep, logradouro, bairro, localidade, uf);
  const { status, error } = data;
  if (status) {
    return res.status(status).json(error);
  }

  return res.status(201).json(data);
}

module.exports = {
  getCEP,
  postCEP,
};
