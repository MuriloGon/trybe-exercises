const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//ex1
const addField = (obj, key, value) => {
  Object.assign(obj, { [key]: value })
  return obj;
}
console.log(addField(lesson2, 'turno', 'noite'));

//ex2
const listKeys = (obj) => {
  const keys = Object.keys(obj);
  keys.forEach((x, i) => console.log(i, x))
  return keys;
}
listKeys(lesson1);

//ex3
const objectSize = (obj) => {
  const size = Object.keys(obj).length;
  console.log('size: ', size)
  return size;
}
objectSize(lesson1);
