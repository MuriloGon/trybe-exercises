const assert = require('assert');

function sum(...values) {
  if (values.length < 1) return 0;
  return values.reduce((a, b) => a + b);
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);