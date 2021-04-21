// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Cat' },
// ];

// const findAnimalsByType = (type) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);
//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       };

//       return reject({ error: 'Não possui esse tipo de animal.' });
//     }, 100);
//   })
// );

// const getListAnimals = (type) => (
//   findAnimalsByType(type).then(list => list)
// );

//6.1
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const findAnimalByName = async (nickname) => {

  const animal = Animals.find(({ name }) => name === nickname);
  if (animal !== undefined) {
    await wait(1000);
    return animal;
  }

  throw 'Nenhum animal com esse nome!';
};

const getAnimal = async (nickname) => {
  try {
    const animalFound = await findAnimalByName(nickname);
    await wait(1000);
    return animalFound;
  } catch (error) {
    throw error;
  };
};

module.exports = { getAnimal }