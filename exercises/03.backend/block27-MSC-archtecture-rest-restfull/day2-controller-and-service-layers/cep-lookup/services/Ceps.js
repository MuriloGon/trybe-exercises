const Model = require('../models/Ceps');

module.exports = class Ceps {
  constructor(cepModel = Model) {
    this.model = cepModel;
  }

  async getCepByCep(cep) {
    const data = await this.model.getByCEP(cep);
    if (data.length === 0) {
      return ({ status: 404, error: { code: 'notFound', message: 'CEP não encontrado' } });
    }
    return data[0];
  }
};
