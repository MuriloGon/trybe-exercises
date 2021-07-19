// Exercise 01
db.restaurants.find({}, { name: 1, _id: 0 }).sort({ name: 1 });

// Exercise 02
db.restaurants.find({}, { rating: 1, name: 1, _id: 0 }).sort({ rating: -1, name: 1 });
db.restaurants.find({}, { rating: 1, name: 1, _id: 0 }).sort({ rating: -1 }, { name: 1 });
