const { questionFloat } = require('readline-sync');

function velocity(distance, time) {
  return distance / time;
}

const distance = questionFloat('Qual a distância? (m)\t');
const time = questionFloat('Qual o tempo? (s)\t');

console.log('A velocidade é ', velocity(distance, time), 'm/s');
