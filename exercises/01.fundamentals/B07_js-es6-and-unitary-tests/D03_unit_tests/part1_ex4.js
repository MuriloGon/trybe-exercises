const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(typeof (myFizzBuzz), 'function');

//ex4.a
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz');

//ex4.b
assert.deepStrictEqual(myFizzBuzz(3), 'fizz');

//ex4.c
assert.deepStrictEqual(myFizzBuzz(5), 'buzz');

//ex4.d
assert.deepStrictEqual(myFizzBuzz(2), 2);