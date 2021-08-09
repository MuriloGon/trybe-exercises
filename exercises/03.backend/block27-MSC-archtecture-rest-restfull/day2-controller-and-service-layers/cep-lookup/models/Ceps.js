const conn = require('./connection');

async function getAll() {
  const q = 'SELECT logradouro, bairro, localidade, uf FROM cep_lookup.ceps';
  const [data] = await conn.execute(q);
  return data;
}

async function getByCEP(cep) {
  const q = `
  SELECT cep, logradouro, bairro, localidade, uf 
  FROM cep_lookup.ceps WHERE cep=?`;
  const [data] = await conn.execute(q, [cep]);
  return data;
}

module.exports = {
  getAll,
  getByCEP,
};
