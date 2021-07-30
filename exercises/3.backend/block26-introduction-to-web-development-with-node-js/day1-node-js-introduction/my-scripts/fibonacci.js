const { questionInt } = require('readline-sync');

function fibonnaci(num) {
  const output = [];
  let n1 = 0, n2 = 1, next_num, i;
  for (i = 1; i <= num; i++) {
    next_num = n1 + n2; 
    output.push(next_num);
    n1 = n2;
    n2 = next_num;
  }
  return output
}

function main() {
  let n = 0;
  while (n <= 0) {
    n = questionInt('Entre com um número inteiro? )0, inf(:\t',)
  }
  console.log('A sequência de fibonacci é: ', fibonnaci(n));
}

module.exports = main;
