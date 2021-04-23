const ex04 = require('../src/ex04');

jest.mock('../src/ex04');

ex04.transformToUpperCase
  .mockImplementation(str => str.toLowerCase());

ex04.getFirstLetter
  .mockImplementation(str => str.slice(-1));

ex04.concatStrings
  .mockImplementation((str1, str2, str3) => str1 + str2 + str3);

describe('EX04 - Mocking modules', () => {
  test('transformToUpperCase mock', () => {
    const expected = ex04.transformToUpperCase('MuRiLo');
    expect(ex04.transformToUpperCase).toBeDefined();
    expect(expected).toBe('murilo');
    expect(ex04.transformToUpperCase).toHaveBeenCalledTimes(1);
  });

  test('getFirstLetter mock', () => {
    const expected = ex04.getFirstLetter('FaNcY_MsG');
    expect(ex04.getFirstLetter).toBeDefined();
    expect(expected).toBe('G');
    expect(ex04.getFirstLetter).toHaveBeenCalledTimes(1);
  });

  test('concatStrings mock', () => {
    const expected = ex04.concatStrings('ba', 'na', 'na');
    expect(ex04.concatStrings).toBeDefined();
    expect(expected).toBe('banana');
    expect(ex04.concatStrings).toHaveBeenCalledTimes(1);
  });
});
