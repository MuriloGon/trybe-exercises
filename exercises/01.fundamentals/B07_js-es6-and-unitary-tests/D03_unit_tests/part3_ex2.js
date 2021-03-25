const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(characters[index]);
    } else {
      results.push('_');
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';