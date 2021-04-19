const { sum } = require('./part1_ex1');

describe('EX01 - Sum function', () => {
  it('a. sum is a function', () => {
    expect(typeof sum).toEqual('function');
  });

  it('b. compute de sum correctly', () => {
    expect(sum(2, 3)).toEqual(5);
    expect(sum(0, 0)).toEqual(0);
    expect(sum(-2, -303)).toEqual(-305);
    expect(sum(Infinity, Infinity)).toEqual(Infinity);
  });

  it('c. the parameters must be numbers', () => {
    expect(() => sum('5', 1)).toThrow(TypeError);
    expect(() => sum(1, 1)).not.toThrow(TypeError);
  })
});