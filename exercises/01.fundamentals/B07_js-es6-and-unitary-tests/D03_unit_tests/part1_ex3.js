const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.strictEqual(typeof (myRemoveWithoutCopy), 'function')

//ex3.a
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

//ex3.b
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//ex3.c
const a = [1, 2, 3, 4];
const b = [...myRemoveWithoutCopy(a, 1)];
assert.deepStrictEqual(a, b)

//ex3.d
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 4), [1, 2, 3])