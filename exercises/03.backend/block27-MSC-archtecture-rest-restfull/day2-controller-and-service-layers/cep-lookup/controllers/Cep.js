const { createCEP } = require('../models/Ceps');
const ViaCepAPI = require('../models/ViaCepAPI');
const Ceps = require('../services/Ceps');

async function getCEP(req, res, next) {
  const { cep } = req.params;
  const ceps = new Ceps();
  const data = await ceps.getCepByCep(cep);
  const { status } = data;
  if (status) {
    return next();
  }
  return res.json(data);
}

async function createCepFromAPI(req, res) {
  const { cep } = req.params;
  let apiResp;

  try {
    apiResp = await ViaCepAPI.getByCep(cep);
  } catch (error) {
    return res.status(502).json({ message: 'Bad Guy' });
  }

  const {
    erro, logradouro, bairro, localidade, uf,
  } = apiResp;

  if (erro) {
    const message = 'Not Found';
    return res.status(404).json({ message });
  }

  const data = await createCEP(cep, logradouro, bairro, localidade, uf);
  return res.status(200).json(data);
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
  createCepFromAPI,
};
