const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  if (students.length !== grades.length) throw Error('The arrays must\'ve the same length!!');

  return students.map((student, index) => {
    const average = grades[index].reduce((a, b) => a + b) / grades[index].length;
    return {
      name: student,
      average: average,
    }
  })
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);