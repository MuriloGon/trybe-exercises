const assert = require('assert');

const removeMiddle = (array) => {
  if (array.length % 2 === 0) throw new Error('Enter an array with even length');
  const middleIndex = Math.floor((array.length) / 2);
  const name = array[middleIndex];
  const newArray = [...array.slice(0, middleIndex), ...array.slice(middleIndex + 1, array.length)];

  for (let x = 0; x < newArray.length; x += 1) array[x] = newArray[x];
  array.pop();

  return [name];
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);