const { questionInt } = require('readline-sync');

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}

function main() {
  let n = 0;
  while (n <= 0) {
    n = questionInt('Entre com um número inteiro? )0, inf(:\t');
  }
  console.log('O fatorial é: ', factorial(n));
}

module.exports = main;