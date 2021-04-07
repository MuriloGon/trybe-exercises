
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, nxt) => {
    let repeatedLetter = 0;
    const letters = nxt.split('');
    letters.forEach(letter=>{
      if(letter.toLowerCase() === 'a') repeatedLetter += 1;
    })
    return acc + repeatedLetter;
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);