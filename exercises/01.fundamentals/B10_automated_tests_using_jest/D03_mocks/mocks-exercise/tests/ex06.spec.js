const ex06 = require('../src/ex06');

jest.mock('../src/ex06');

ex06.fetchRandomDog
  .mockResolvedValueOnce('request success')
  .mockRejectedValueOnce('request failed');

describe('EX06 - Mock async module', () => {
  test('Resolved request on first call', async () => {
    expect.assertions(1);
    const resolve = await ex06.fetchRandomDog();
    expect(resolve).toBe('request success');
  });

  test('Rejected request on second call', async () => {
    expect.assertions(1);
    try {
      await ex06.fetchRandomDog();
    } catch (error) {
      expect(error).toBe('request failed');
    }
  });
});