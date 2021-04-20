function totalCups(str) {
  const regex = /([1-9]{1,}) (\w{1,})/g;
  let matches = str.match(regex);
  let strNumbers = [];
  let totalNumber = 0;

  for (let match of matches) strNumbers.push(match.split(' ')[0]);
  for (let strNum of strNumbers) {
    let num = Number(strNum);
    if (num >= 0 && num <= 9) totalNumber += num;
  }
  return totalNumber;
}

function hydrate(str) {
  let totalCupsNum = totalCups(str);

  if (totalCupsNum > 1) return `${totalCupsNum} copos de água`;
  return `${totalCupsNum} copo de água`;
}

module.exports = {
  hydrate,
};