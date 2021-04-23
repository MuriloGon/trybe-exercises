const ex1 = require('../src/ex01');

ex1.rndNumber = jest.fn().mockReturnValue(10);

describe('Ex01 - the randNums mocked function', () => {
  test('The function must be called 3 times', () => {
    ex1.rndNumber();
    ex1.rndNumber();
    ex1.rndNumber();

    expect(ex1.rndNumber).toBeDefined();
    expect(ex1.rndNumber).toBeCalledTimes(3);
    expect(ex1.rndNumber).toHaveBeenCalledTimes(3);
  });

  test('The default function return is 10', () => {
    expect(ex1.rndNumber()).toBe(10);
  });

  

});
