const { cepValidation, postValidation } = require('../schemas/Cep');

const cepValidationParam = (req, res, next) => {
  const { cep } = req.params;
  const { status, error } = cepValidation(cep);
  if (status) return res.status(status).json(error);

  req.params.cep = cep.replace('-', '');
  return next();
};

const bodyValidation = (req, res, next) => {
  const {
    cep, logradouro, bairro, localidade, uf,
  } = req.body;
  const { status, error } = postValidation(cep, logradouro, bairro, localidade, uf);
  if (status) {
    return res.status(status).json(error);
  }
  req.body.cep = cep.replace('-', '');
  return next();
};

module.exports = {
  cepValidationParam,
  bodyValidation,
};
