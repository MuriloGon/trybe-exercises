const Model = require('../models/Ceps');

module.exports = class Ceps {
  constructor(cepModel = Model) {
    this.model = cepModel;
  }

  async getCepByCep(cep) {
    const data = await this.model.getByCEP(cep);
    const { status } = data;
    if (status) {
      return data;
    }
    return data[0];
  }
};
