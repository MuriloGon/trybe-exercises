// ex01
const employee = (nomeCompleto) => ({
  nomeCompleto,
  email: `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`
});

const newEmployees = () => {
  const employees = {
    id1: employee('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: employee('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: employee('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};
console.log(newEmployees());

// ex02
const checkNumber = (num1, num2) => {
  if (num1 === num2) return true;
  return false;
}

const drawNumber = (num, checkFunc) => {
  const numDrawn = Math.ceil(Math.random() * 5);
  if (checkFunc(num, numDrawn)) return 'Parabéns você ganhou';
  return 'Tente novamente';
}
console.log(drawNumber(1, checkNumber));
console.log(drawNumber(2, checkNumber));
console.log(drawNumber(3, checkNumber));
console.log(drawNumber(4, checkNumber));
console.log(drawNumber(5, checkNumber));

// ex03
const qstAns = (correctAns) => {
  return (userAns) => {
    const correct = correctAns.toLowerCase()
    const user = userAns.toLowerCase()
    if (correct === user) return true;
    else return false;
  }
}
const check1 = qstAns('Gabarito')('Teste');
const check2 = qstAns('higher order function')('HIGHER ORDER FUNCTION')
console.log(check1, check2);

// ex04
const checkAns = (correctAns, usrAns) => {
  const len = correctAns.length;
  let rght = 0;
  for (let i = 0; i < len; i += 1) {
    if (usrAns[i] === 'N.A') {
      rght += 0;
    } else if (usrAns[i] === correctAns[i]) {
      rght += 1;
    } else rght -= 0.5;
  }
  return rght;
}

const countCorrectAns = (correctAnsArr, checkAnsFunc) => {
  return (userAnsArr)=>checkAnsFunc(correctAnsArr, userAnsArr)
}
const rightAnswers =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const checkAnsCurring = countCorrectAns(rightAnswers, checkAns)
console.log(checkAnsCurring(studentAnswers))