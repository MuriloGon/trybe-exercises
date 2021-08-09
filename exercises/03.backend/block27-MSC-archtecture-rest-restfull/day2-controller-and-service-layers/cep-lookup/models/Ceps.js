const conn = require('./connection');

async function getAll() {
  const q = 'SELECT logradouro, bairro, localidade, uf FROM cep_lookup.ceps';
  const [data] = await conn.execute(q);
  return data;
}

module.exports = {
  getAll,
};
