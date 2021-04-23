const ex04 = require('../src/ex04');

jest.mock('../src/ex04');

ex04.transformToUpperCase
  .mockImplementation(str => str.toLowerCase());

describe('EX05 - Mocking modules with restore', () => {
  test('transformToUpperCase mock', () => {
    const expected = ex04.transformToUpperCase('MuRiLo');
    expect(ex04.transformToUpperCase).toBeDefined();
    expect(expected).toBe('murilo');
    expect(ex04.transformToUpperCase).toHaveBeenCalledTimes(1);
  });

  test('restore original implementation', () => {
    ex04.transformToUpperCase.mockClear();
    expect(ex04.transformToUpperCase).toHaveBeenCalledTimes(0);
    
    const expected = ex04.transformToUpperCase('FaNcY_MsG');

    expect(ex04.transformToUpperCase).toBeDefined();
    expect(expected).toBe('fancy_msg');
    expect(ex04.transformToUpperCase).toHaveBeenCalledTimes(1);
  });
});
