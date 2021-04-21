const { getAnimal } = require('./ex6');

describe('Testing promise - findAnimalByName', () => {
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
      return getAnimal('Bob').catch(error =>{
        expect(error).toEqual('Nenhum animal com esse nome!')}
      );
    });
  });
});