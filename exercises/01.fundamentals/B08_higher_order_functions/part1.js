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
  if(checkFunc(num, numDrawn)) return 'Parabéns você ganhou';
  return 'Tente novamente';
}
console.log(drawNumber(1, checkNumber));
console.log(drawNumber(2, checkNumber));
console.log(drawNumber(3, checkNumber));
console.log(drawNumber(4, checkNumber));
console.log(drawNumber(5, checkNumber));

