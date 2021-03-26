const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber = array[0];
  for (let index = 0; index < array.length - 1; index += 1) {
    if (largestNumber < array[index + 1]) {
      largestNumber = array[index + 1];
    }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.deepStrictEqual(
  getLargestNumber(parameter), result);

assert.deepStrictEqual(
  getLargestNumber([45, 8, 2, 50, 1, 999, 7, 99]), 999);

assert.deepStrictEqual(
  getLargestNumber([45, 8, 2, 50, 1, -1, 7,]), 50);