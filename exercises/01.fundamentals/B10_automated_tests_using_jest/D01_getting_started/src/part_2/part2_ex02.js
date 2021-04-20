// Desafio 10
function techList(techArr, nameStr) {
  let outputObj = [];

  if (techArr.length <= 0) return 'Vazio!';

  for (let techItem of techArr.sort()) {
    outputObj.push(
      {
        tech: techItem,
        name: nameStr,
      },
    );
  }
  return outputObj;
}

module.exports = {
  techList,
};
