const assert = require('assert');

const sumAllNumbers = (nums) => nums.reduce((s, n) => s + n);

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);