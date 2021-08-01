/*
{
  _id: ObjectId("60f4800b12763957f4d61066"),
  name: 'A-Bomb',
  alignment: 'good',
  gender: 'Male',
  race: 'Human',
  aspects: {
    eyeColor: 'yellow',
    hairColor: 'No Hair',
    height: 203,
    weight: 200
  },
  publisher: 'Marvel Comics'
}
*/

// Execise 01
db.superheroes.findOne();

// Execise 02
db.superheroes.find({ 'aspects.height': { $lt: 180, $gt: 0 } });
db.superheroes.find({ 'aspects.height': { $lt: 180, $gt: 0 } }, { name: 1, publisher: 1, 'aspects.height': 1, _id: 0 });

// Exercise 03
db.superheroes.find({ 'aspects.height': { $lt: 180, $gt: 0 } }).count();

// Exercise 04
db.superheroes.find({ 'aspects.height': { $lte: 180, $gt: 0 } }).count();

// Exercise 05
db.superheroes.find({ 'aspects.height': { $gte: 200 } });

// Exercise 06
db.superheroes.find({ 'aspects.height': { $gte: 200 } }).count();

// Exercise 07
db.superheroes.find({ 'aspects.eyeColor': 'green' }, { name: 1, 'aspects.eyeColor': 1, _id: 0 });

// Exercise 08
db.superheroes.find({ 'aspects.eyeColor': 'blue' }, { name: 1, 'aspects.eyeColor': 1, _id: 0 }).count();

// Exercise 09
db.superheroes.find({ 'aspects.hairColor': { $in: ['No Hair', 'Black'] } }, { 'aspects.hairColor': 1, _id: 0 }).count();

// Exercise 10
db.superheroes.find({ 'aspects.hairColor': { $in: ['No Hair', 'Black'] } }).count();

// Exercise 11
db.superheroes.find({ 'aspects.hairColor': { $not: { $in: ['No Hair', 'Black'] } } }).count();

// Exercise 12
db.superheroes.find({ 'aspects.height': { $not: { $gte: 180 }, $gt: 0 } }).count();

// Exercise 13
db.superheroes.find({
  $nor: [
    { race: 'Human' },
    { 'aspects.height': { $gt: 180 } }
  ],
  $and: [{ 'aspects.height': { $gt: 0 } }]
}, { _id: 0, race: 1, 'aspects.height': 1 });

// Exercise 14
db.superheroes.find({
  $and: [
    { 'aspects.height': { $in: [180, 200] } },
    { publisher: 'Marvel Comics' }
  ]
}, { publisher: 1, 'aspects.height': 1, _id: 0 })

// Exercise 15
db.superheroes.find({
  'aspects.weight': { $gte: 80, $lte: 100 },
  race: { $in: ['Human', 'Mutant'] },
  publisher: { $not: { $eq: 'DC Comics' } }
}, { race: 1, publisher: 1, name: 1, 'aspects.weight': 1, _id: 0 });

// Exercise 16
db.superheroes.find({
  race: { $exists: true }
}).count();

// Exercise 17
db.superheroes.find({
  'aspects.hairColor': { $exists: false }
}).count();

// Exercise 18
db.superheroes.deleteOne({
  publisher: 'Sony Pictures'
})

// Exercise 19
db.superheroes.deleteMany({
  publisher: 'George Lucas'
})