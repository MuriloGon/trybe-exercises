function encode(phrase) {
  let word = '';
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let letterIndex = 0; letterIndex < phrase.length; letterIndex += 1) {
    if (vowels[phrase[letterIndex].toLowerCase()]) {
      word += vowels[phrase[letterIndex]];
    } else {
      word += phrase[letterIndex];
    }
  }
  return word;
}

function decode(phrase) {
  let word = '';
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let letterIndex = 0; letterIndex < phrase.length; letterIndex += 1) {
    if (vowels[phrase[letterIndex].toLowerCase()]) {
      word += vowels[phrase[letterIndex]];
    } else {
      word += phrase[letterIndex];
    }
  }
  return word;
}

module.exports = {
  decode,
  encode,
};
