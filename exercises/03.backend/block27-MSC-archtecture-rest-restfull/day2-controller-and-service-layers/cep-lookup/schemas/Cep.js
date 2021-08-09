const validateCep = (cep) => /^\d{5}-?\d{3}$/.test(cep);

function cepValidation(cep) {
  if (!validateCep(cep)) return { status: 400, error: { code: 'invalidData', message: 'Invalid CEP' } };
  return {};
}

module.exports = {
  cepValidation,
};
