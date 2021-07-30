const { questionFloat } = require('readline-sync');

function IMCMessages(imc) {
  if(imc < 18.5) return 'Abaixo do peso (magreza)'
  else if(imc >= 18.5 || imc < 24.9) return 'Peso normal'
  else if(imc >= 24.9 || imc < 29.9) return 'Acima do peso (sobrepeso)'
  else if(imc >= 30.0 || imc < 34.4) return 'Obesidade grau I'
  else if(imc >= 35.0 || imc < 39.9) return 'Obesidade grau II'
  else return 'Obesidade graus III e IV';
}

function computeIMC(height, weight) {
  return weight / height ** 2;
}

function main() {
  const height = questionFloat('Qual sua altura? (m):\t',)
  const weight = questionFloat('Qual seu peso? (kg):\t')
  
  console.log('Seu IMC é: ', IMCMessages(computeIMC(height, weight)));
}

module.exports = main;