/* PART I */
//EX01
const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

//EX02
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function sortArray(arr) {
  let out = [...arr].sort((a, b) => a - b);
  return `Os números ${out} se encontram ordenados de forma crescente!`;
}

console.log(sortArray(oddsAndEvens));
/* PART II */
//EX01
function factorial(n) {
  let output = 1;
  for (let x = Math.round(Math.abs(n)); x > 1; x -= 1) output *= x;
  return output;
}

console.log(factorial(4));

//EX02
function longestWord(text) {
  const splitedText = text.split(' ').filter(x => x !== '');
  let maxIndex = 0;

  splitedText.forEach((_x, i) => {
    const currentLen = splitedText[maxIndex].length;
    const maxLen = splitedText[i].length;
    if (currentLen <= maxLen) maxIndex = i;
  })
  return splitedText[maxIndex];
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));