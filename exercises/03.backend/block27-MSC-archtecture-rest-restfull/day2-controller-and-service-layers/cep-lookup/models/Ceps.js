const conn = require('./connection');

async function getAll() {
  const q = 'SELECT logradouro, bairro, localidade, uf FROM cep_lookup.ceps';
  const [data] = await conn.execute(q);
  return data;
}

async function getByCEP(cep) {
  const q = `
  SELECT cep, logradouro, bairro, localidade, uf 
  FROM cep_lookup.ceps WHERE cep=?;`;
  const [data] = await conn.execute(q, [cep]);
  return data;
}

async function createCEP(cep, logradouro, bairro, localidade, uf) {
  const qSelect = 'SELECT cep FROM cep_lookup.ceps WHERE cep=?;';
  const [data] = await conn.execute(qSelect, [cep]);
  if (data.length !== 0) {
    const status = 409;
    const code = 'alreadyExists';
    const message = 'CEP já existente';
    return { status, error: { code, message } };
  }

  const qCreate = `
  INSERT INTO cep_lookup.ceps(cep, logradouro, bairro, localidade, uf)
  VALUES (?, ?, ?, ?, ?);`;
  await conn.execute(qCreate, [cep, logradouro, bairro, localidade, uf]);

  return {
    cep, logradouro, bairro, localidade, uf,
  };
}
module.exports = {
  getAll,
  getByCEP,
  createCEP,
};
