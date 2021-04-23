const { users, findUserById, getUserName } = require('./ex2');

const randIndex = (arr) => Math.floor(Math.random() * arr.length);

describe('EX2 - testins promisses', () => {
  const existingIds = Object.keys(users);

  test('existing ids', () => {
    const idTested = existingIds[randIndex(existingIds)];
    const nameExpected = users[idTested].name;

    return getUserName(idTested)
      .then((nameObj) => {
        expect(nameObj).toBe(nameExpected)
      });
  });

  test('non-existing ids', () => {
    const idTested = 10;
    const nameExpected = 'murilo';
    const errorObj = { error: `User with ${idTested} not found.` }

    expect.assertions(1);
    return getUserName(idTested)
      .then((nameObj) => {
        expect(nameObj).toBe(nameExpected)
      })
      .catch((error) => {
        expect(error).toEqual(errorObj);
      });
  });
});