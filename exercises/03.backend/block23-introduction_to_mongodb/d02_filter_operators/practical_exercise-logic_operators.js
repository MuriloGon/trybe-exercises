// Exercise 01
db.restaurants.find({ rating: { $not: { $lte: 5 } } }).count();

// Exercise 02
db.restaurants.find({
  $or: [
    { rating: { $gte: 6 } },
    { borough: 'Brooklyn' }
  ]
}).count();

// Exercise 03
db.restaurants.find({
  $and: [
    { rating: { $gt: 4 } },
    { borough: { $in: ['Queens', 'Staten Island', 'Broklyn'] } }
  ]
}).count();

// Exercise 04
db.restaurants.find({
  $nor: [
    { rating: 1 },
    { cuisine: 'American' }
  ]
}).count();

db.restaurants.find({
  $and: [
    { rating: { $not: { $eq: 1 } } },
    { cuisine: { $not: { $eq: 'American' } } }
  ]
}).count();

// Exercise 05
/* Trybe Ans */
db.restaurants.find({
  $and: [
    { $or: [{ rating: { $gte: 6, $lt: 10 } }] },
    { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] },
  ],
}, { rating: 1, borough: 1, cuisine: 1, _id: 0 }).count();
/* My Ans */
db.restaurants.find({
  $and: [
    { rating: { $gt: 6 } },
    { rating: { $lt: 10 } },
    { borough: 'Brooklyn' }
  ],
  $or: [
    { cuisine: { $not: { $eq: 'Delicatessen' } } }
  ]
}, { rating: 1, borough: 1, cuisine: 1, _id: 0 }).count();
