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


//ex4
const listEntries = (obj) => {
  const entries = Object.entries(obj);
  entries.forEach((x, i) => console.log(i, x))
  return entries;
}
listEntries(lesson1);

//ex5
const allLesosns = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3
})
console.log(allLesosns);

//ex6
function totalStudents(obj){
  let students = 0;
  for(let key in obj) {
    students += obj[key]['numeroEstudantes']
  }
  return students;
}
console.log(totalStudents(allLesosns));

//ex7
function getValueByNumber(obj, pos){
  const keys = Object.keys(obj);
  return obj[keys[pos]];
}
console.log(getValueByNumber(lesson1, 0));
