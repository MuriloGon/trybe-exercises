const lessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

//ex1
function filterBy(object, key, value) {
  let filterdObject = [];
  for (let key of Object.keys(object)) {
    filterdObject.push(object[key]);
  }
  filterdObject = filterdObject.filter(x => x[key] === value)
  return filterdObject;
}

function countStudentsByDiscipline(obj, discipline) {
  const lessons_ = filterBy(obj, 'materia', discipline)
  let output = 0;
  lessons_.forEach(lesson=> output += lesson.numeroEstudantes)
  return output;
}
console.log(countStudentsByDiscipline(lessons, 'Matemática'))