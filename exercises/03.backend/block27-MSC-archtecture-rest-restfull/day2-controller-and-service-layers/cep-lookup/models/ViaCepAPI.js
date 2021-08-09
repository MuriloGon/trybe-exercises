const http = require('https');

const getByCep = async (cep) => new Promise((resolve, reject) => {
  http.get(`https://viacep.com.br/ws/${cep}/json/`, (res) => {
    res.on('data', (d) => {
      const rawData = d.toString('utf-8');
      const data = JSON.parse(rawData);
      if (data.erro !== undefined) {
        return resolve(data);
      }
      data.logradouro = data.logradouro.substr(0, 50);
      data.bairro = data.bairro.substr(0, 20);
      data.localidade = data.localidade.substr(0, 20);
      data.uf = data.uf.substr(0, 2);
      return resolve(data);
    });
    res.on('error', (err) => {
      reject(err);
    });
  });
});

module.exports = {
  getByCep,
};
