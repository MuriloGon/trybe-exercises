const { myRemoveWithoutCopy: mrwc } = require('./part1_ex3');

describe('EX03 - test function myRemoveWithoutCopy', () => {
  it('a. myRemoveWithoutCopy is a function', () => {
    expect(typeof mrwc).toBe('function');
  });

  it('b. the functions returns the expected result', () => {
    const actual = mrwc([1, 2, 3, 4], 3);
    const expected = [1, 2, 4];
    expect(expected).toEqual(actual);
  });

  it('b. the functions is mutable', () => {
    const list = [1, 2, 3, 4];
    const actual = mrwc(list, 3);
    const expected = [1, 2, 4];
    expect(expected).toEqual(actual);
    expect(actual).toEqual(list);
  });
});
