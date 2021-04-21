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

// 6-a
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


// 6-b

const findAnimalsByAge = (animalAge) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const animallsByAge = Animals.filter(({ age }) => age === animalAge);

      if (animallsByAge.length > 0) {
        res(animallsByAge);
      } else {
        rej({ error: `No animals are ${animalAge} ` });
      }
    }, 500);
  })
};

const getListAnimalsByAge = (age) => (
  findAnimalsByAge(age).then(list => list)
);

module.exports = { getAnimal, getListAnimalsByAge }