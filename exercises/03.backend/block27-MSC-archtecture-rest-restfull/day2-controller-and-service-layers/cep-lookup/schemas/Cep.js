const joi = require('joi');

const validateCep = (cep) => /^\d{5}-?\d{3}$/.test(cep);

function cepValidation(cep) {
  if (!validateCep(cep)) return { status: 400, error: { code: 'invalidData', message: 'Invalid CEP' } };
  return {};
}

function postValidation(cep, logradouro, bairro, localidade, uf) {
  const { error } = joi.object({
    cep: joi.string().pattern(/^\d{5}-\d{3}$/).required(),
    logradouro: joi.string().required(),
    bairro: joi.string().required(),
    localidade: joi.string().required(),
    uf: joi.string().length(2).required(),
  }).validate({
    cep, logradouro, bairro, localidade, uf,
  });
  if (error) {
    const code = 'invalidData';
    const status = 400;
    const { message } = error.details[0];
    return { status, error: { code, message } };
  }
  return {};
}

module.exports = {
  cepValidation,
  postValidation,
};
