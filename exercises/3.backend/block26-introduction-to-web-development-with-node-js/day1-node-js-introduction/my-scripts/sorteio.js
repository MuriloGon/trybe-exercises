const { questionInt, keyInYNStrict } = require('readline-sync');

function guessNumber(input, maxNum=10, minNum=0) {
  const out = Math.round(Math.random() * (maxNum-minNum) + minNum)
  if(input === out) return 'Parabéns, número correto';
  return `Opa, não foi dessa vez. O número era ${out}`;
}

function main() {
  let control = true;
  while(control){
    console.log('\n');
    const out = guessNumber(questionInt('Entre com um número entre [0,10]\t'));
    console.log(out);
    console.log('\n');
    control = keyInYNStrict('Sortear novamente ?\t');
  }
}

module.exports = main;