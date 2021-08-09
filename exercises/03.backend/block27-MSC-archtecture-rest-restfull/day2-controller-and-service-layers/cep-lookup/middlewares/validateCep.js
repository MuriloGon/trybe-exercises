const { cepValidation } = require('../schemas/Cep');

module.exports = (req, res, next) => {
  const { cep } = req.params;
  const { status, error } = cepValidation(cep);
  if (status) return res.status(status).json(error);

  req.params.cep = cep.replace('-', '');
  return next();
};
