// Exercise 01
db.movies.findOne({ title: 'Batman' })
db.movies.updateOne({ title: 'Batman' }, { $set: { imdbRating: 7.7 } });

// Exercise 02
db.movies.updateOne({ title: 'Godzilla' }, { $set: { budget: 1 } });

// Exercise 03
db.movies.updateOne({ title: 'Home Alone' }, {
  $set: {
    budget: 15,
    imdbRating: 5.5
  }
});

// Exercise 04
db.movies.updateOne(
  { title: 'Batman' },
  { $inc: { imdbRating: 2 } }
);

// Exercise 05
db.movies.updateOne(
  { title: 'Home Alone' },
  { $inc: { budget: 5 } }
);

// Exercise 06
db.movies.updateOne(
  { title: 'Batman' },
  { $mul: { imdbRating: 4 } }
);

// Exercise 07
db.movies.updateOne(
  { title: 'Batman' },
  { $rename: { budget: 'estimatedBudget' } }
);

// Exercise 08
db.movies.updateOne(
  { title: 'Home Alone' },
  { $min: { budget: 5 } }
);

// Exercise 09
db.movies.updateOne(
  { title: 'Godzilla' },
  { $max: { imdbRating: 8.6 }, $set: { 'category.1': 'Thriller' } }
);

// Exercise 10
db.movies.updateOne(
  { title: 'Home Alone' },
  { $currentDate: { lastUpdate: { $type: 'timestamp' } } }
);

// Exercise 11
db.movies.updateMany({}, { $set: { sequels: 0 } });

// Exercise 12
db.movies.updateMany({}, { $unset: { budget: '', estimatedBudget: '' } });

// Exercise 13
db.movies.updateMany({
  title: { $in: ["Batman", "Home Alone"] },
  imdbRating: { $lt: 17 }
}, { $set: { imdbRating: 17 } });