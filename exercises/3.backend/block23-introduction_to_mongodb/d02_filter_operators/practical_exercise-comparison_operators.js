// Exercise 01
db.restaurants.find({ borough: { $in: ['Queens', 'Staten Island', 'Bronx'] } }).count();
db.restaurants.find({
  $or: [
    { borough: 'Queens' },
    { borough: 'Staten Island' },
    { borough: 'Bronx' },
  ]
}).count();

// Exercise 02
db.restaurants.find({ $not: { cuisine: 'American' } }).count();

// Exercise 03
db.restaurants.find({ rating: { $gte: 8 } }).count();

// Exercise 04
db.restaurants.find({ rating: { $lt: 4 } }).count();

// Exercise 05
db.restaurants.find({ rating: { $nin: [5, 6, 7] } }).count();