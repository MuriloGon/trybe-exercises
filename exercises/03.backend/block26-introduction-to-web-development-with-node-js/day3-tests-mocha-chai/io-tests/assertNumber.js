function assertNumber(num) {
  if (typeof num !== 'number') throw new Error('O valor deve ser um número');
  if (num < 0) return 'negativo';
  if (num === 0) return 'neutro';
  return 'positivo';
}

module.exports = assertNumber;
