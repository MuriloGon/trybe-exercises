const transformToUpperCase = (str) =>
  str.split('').map(
    (letter) => {
      const code = letter.charCodeAt(0);
      const offSet = 32;
      if (code >= 65 && code <= 90) return letter;
      else if ((code >= 97 && code <= 122)
        || (code >= 224 && code <= 253)) return String.fromCharCode(code - 32);
      return letter
    }
  ).join('');

const getFirstLetter = (str) =>
  String.fromCharCode(str.charAt(0).charCodeAt(0));

const concatStrings = (str1, str2) =>
  new String().concat(str1, str2);

module.exports = {
  transformToUpperCase,
  getFirstLetter,
  concatStrings
}