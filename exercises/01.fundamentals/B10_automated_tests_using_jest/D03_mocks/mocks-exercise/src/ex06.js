
const fetchRandomDog = () => {
  return new Promise((resolve, reject) => {
    const URL = 'https://dog.ceo/api/breeds/image/randoma';
    fetch(URL)
      .then(x => x.json())
      .then(resolve)
      .catch(reject);
  })
};

module.exports = { fetchRandomDog };