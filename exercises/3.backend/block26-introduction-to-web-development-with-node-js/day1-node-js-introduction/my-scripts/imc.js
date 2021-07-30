const { questionFloat } = require('readline-sync');


function computeIMC(height, weight) {
  return weight / height ** 2;
}
const height = questionFloat('Qual sua altura? (m):\t',)
const weight = questionFloat('Qual seu peso? (kg):\t')
console.log('Seu IMC é: ', computeIMC(height, weight));
