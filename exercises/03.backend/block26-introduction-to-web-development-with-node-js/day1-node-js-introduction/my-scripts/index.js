const { questionInt } = require('readline-sync');

const imc = require('./imc');
const sorteio = require('./sorteio');
const velocity = require('./velocity');
const factorial = require('./factorial');
const fibonacci = require('./fibonacci');

function main() {
  let control = true;
  while(control) {
    const option = questionInt(
      '1-imc | 2-sorteio | 3-velocity | 4-factorial | 5-fibonacci\t'
    );
    switch(option) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        control = false;
        break;
      default:
        control = true;
        break;
    }
    switch (option) {
      case 1: imc(); break;
      case 2: sorteio(); break;
      case 3: velocity(); break;
      case 4: factorial(); break;
      case 5: fibonacci(); break;
    }
  }

}

main();