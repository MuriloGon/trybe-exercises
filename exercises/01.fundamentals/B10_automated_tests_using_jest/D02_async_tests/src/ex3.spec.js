const { users, findUserById, getUserName } = require('./ex3');

const randIndex = (arr) => Math.floor(Math.random() * arr.length);

describe('EX2 - testins promisses', () => {
  const existingIds = Object.keys(users);

  test('existing ids', async () => {
    const idTested = existingIds[randIndex(existingIds)];
    const nameExpected = users[idTested].name;

    const nameObj = await getUserName(idTested);
    expect(nameObj).toBe(nameExpected);
  });

  test('non-existing ids', async () => {
    const idTested = 10;
    const nameExpected = 'murilo';
    const errorObj = { error: `User with ${idTested} not found.` }

    try {
      const nameObj = await getUserName(idTested);
      expect(nameObj).toBe(nameExpected);
    } catch (error) {
      expect(error).toEqual(errorObj);
    }
  });
});