const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];