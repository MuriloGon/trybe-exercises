const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
//ex1.a
assert.strictEqual(sum(4, 5), 9);

//ex1.b
assert.strictEqual(sum(0, 0), 0);

//ex1.c
assert.strictEqual(sum(4,"5"), 9);