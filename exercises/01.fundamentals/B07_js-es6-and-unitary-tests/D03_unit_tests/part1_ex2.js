const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
//ex2.a
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

//ex2.b
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//ex2.c
const a = [1, 2, 3, 4];
const b = [...a];
myRemove(a, 3);
assert.deepStrictEqual(a, b);

//ex2.d
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
