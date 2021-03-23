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

//EX03
function buttonClick(buttonSelector, labelSelector) {
  const btn = document.querySelector(buttonSelector);
  const heading = document.querySelector(labelSelector);
  let clickCount = 0;
  btn.addEventListener('click', () => {
    clickCount += 1;
    heading.innerText = `You've clicked: ${clickCount}times !!!!`;
  });
  return btn;
}

const a = buttonClick('#botao', '#clicks');

//EX04
const func1 = (str, char) => {
  let output = str.split('');
  output = output.map(x => x === 'x' ? char : x);
  return output.join('');
}

const str1 = func1('Tryber x aqui!', 'Bebeto');
console.log(str1);

const skills = ['skill1', 'skill2'];

const func2 = (string, skills) => {
  let output = string;
  skills.forEach(x => {
    output += ` ${x}`;
  });
  return output
}

console.log(func2(func1('Tryber x aqui!', 'EU!!'), skills));