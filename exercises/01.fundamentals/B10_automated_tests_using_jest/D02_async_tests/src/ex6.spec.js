const { getAnimal, getListAnimalsByAge } = require('./ex6');

describe('EX6a - Testing promise - findAnimalByName', () => {
  describe('When the name with the searched animal is found', () => {
    test('Returns the animal object', () => {
      // expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error => {
        expect(error).toEqual('Nenhum animal com esse nome!')
      }
      );
    });
  });
});

describe('EX6b - find by id', () => {
  test('testing existing animal', async () => {
    const expected = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
    const actual = await getListAnimalsByAge(5);
    expect(actual).toEqual(expected);
  });
});