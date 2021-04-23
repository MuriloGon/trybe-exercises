const bonus = require('../src/bonus');

jest.mock('../src/bonus');

const tested_obj = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}

bonus.fetchJoke.mockImplementation(() => {
  return new Promise((res, rej) => {
    setInterval(() => { res(tested_obj); }, 500);
  });
});

describe('BONUS - mocking especific response', () => {
  test('Resolved request', async () => {
    try {
      const response = await bonus.fetchJoke();
      expect(response).toEqual(tested_obj);
    } catch (error) {

    }
  });
});
