const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};
// implement the tests here

assert.strictEqual(typeof (obj1), 'object');
assert.strictEqual(typeof (obj2), 'object');
assert.strictEqual(typeof (obj3), 'object');

//ex5
assert.deepStrictEqual(obj1, obj2)
assert.notDeepStrictEqual(obj2, obj3)