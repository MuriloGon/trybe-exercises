const ex2 = require('../src/ex01');

ex2.rndNumber = jest.fn()
  .mockImplementationOnce((a, b) => a / b);

describe('EX02 - mock with alternative implementation', () => {
  test('the functions is defined', () => {
    expect(ex2.rndNumber).toBeDefined();
    expect(ex2.rndNumber).toBeCalledTimes(0);
  });

  test('the call the custom implementation once', () => {
    expect(ex2.rndNumber(5, 10)).toBeCloseTo(0.5);
    expect(ex2.rndNumber(5, 3)).toBeUndefined();
    expect(ex2.rndNumber).toBeCalledTimes(2);
  });

  test('the right right arguments was passed on previous tests', () => {
    expect(ex2.rndNumber).toBeCalledWith(5, 10);
    expect(ex2.rndNumber).toBeCalledWith(5, 3);
    expect(ex2.rndNumber).not.toBeCalledWith(Infinity, -Infinity);
  });
});