const ex3 = require('../src/ex01');

ex3.rndNumber = jest.fn()
  .mockImplementation((a, b, c) => a * b * c);

describe('EX03 - mock with alternative implementation', () => {
  test('the functions is defined', () => {
    expect(ex3.rndNumber).toBeDefined();
    expect(ex3.rndNumber).toBeCalledTimes(0);
  });

  test('the function must returns', () => {
    expect(ex3.rndNumber(5, 10, 10)).toBe(500);
    expect(ex3.rndNumber(5, 5, 16)).toBe(400);
    expect(ex3.rndNumber(4, 9, 25 / 3)).toBe(300);
    expect(ex3.rndNumber).toBeCalledTimes(3);
  });

  test('remocking function to double single input', () => {
    ex3.rndNumber.mockReset();
    ex3.rndNumber.mockImplementation((a) => a * 2);
    expect(ex3.rndNumber).toHaveBeenCalledTimes(4);
  });
});