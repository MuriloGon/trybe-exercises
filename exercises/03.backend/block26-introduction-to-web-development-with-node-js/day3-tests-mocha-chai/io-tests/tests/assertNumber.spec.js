const { expect } = require('chai');
const assertNumber = require('../assertNumber');

describe('Exercises 01, 02, 03 - função', () => {
  it('entrada deve ser um número', () => {
    expect(() => { assertNumber('1'); }).to.throw(/o valor deve ser um número/i);
    expect(() => { assertNumber('1'); }).to.not.throw(/Qualquer outra coisa/i);
  });
  it('retorna "negativo" quando entradar for um número negativo', () => {
    expect(assertNumber(-10)).to.be.equals('negativo');
    expect(assertNumber(-1)).to.be.equals('negativo');
    expect(assertNumber(-0.10)).to.be.equals('negativo');
  });
  it('retorna "neutro" quando entrada for zero', () => {
    expect(assertNumber(0)).to.be.equals('neutro');
    expect(assertNumber(10 - 10)).to.be.equals('neutro');
  });
  it('retorna "positivo" quando entrada um número positivo', () => {
    expect(assertNumber(0.1)).to.be.equals('positivo');
    expect(assertNumber(1)).to.be.equals('positivo');
    expect(assertNumber(10)).to.be.equals('positivo');
  });
});
