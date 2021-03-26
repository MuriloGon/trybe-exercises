const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let intialNum = 1;
  for (let index = 0; index < characters.length; index += 1) {
    if ('aeiou'.includes(characters[index])) {
      results.push(intialNum);
      intialNum += 1;
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';
assert.deepStrictEqual(removeVowels(parameter), result);