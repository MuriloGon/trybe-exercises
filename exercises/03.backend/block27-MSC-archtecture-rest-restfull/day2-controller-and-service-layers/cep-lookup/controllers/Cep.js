const Ceps = require('../services/Ceps');

async function getCEP(req, res) {
  const { cep } = req.params;
  const ceps = new Ceps();
  const data = await ceps.getCepByCep(cep);
  const { status, error } = data;
  if (status) return res.status(status).json(error);
  return res.json(data);
}

module.exports = {
  getCEP,
};
