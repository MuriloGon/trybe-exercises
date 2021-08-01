// Exercise 01
db.movies.find({ category: { $elemMatch: { $in: ['action', 'family'] } } });

// Exercise 02
db.movies.find({
  category: { $elemMatch: { $eq: 'action' } },
  imdbRating: { $gt: 7 }
});

// Exercise 03
db.movies.updateOne({ title: 'Batman' }, { $push: { ratings: { $each: [85, 100, 102, 105] } } })

// Exercise 04
db.movies.updateOne({ title: 'Godzilla' }, { $set: { ratings: [78, 52, 95, 102] } })

// Exercise 05
db.movies.updateOne({ title: 'Home Alone' }, { $set: { ratings: [200, 99, 65] } })

// Exercise 06
db.movies.find({ ratings: { $elemMatch: { $gt: 103 } } });

// Exercise 07
db.movies.find(
  { ratings: { $elemMatch: { $gte: 100, $lte: 105 } } },
  { _id: 0, title: 1, ratings: 1 }
);

// Exercise 08
db.movies.find(
  { ratings: { $elemMatch: { $gte: 64, $lte: 105 }, $mod: [9, 0] } },
  { _id: 0, title: 1, ratings: 1 }
);

// Exercise 09
db.movies.find(
  { category: 'adventure', ratings: { $gt: 103 } }
);

// Exercise 10
db.movies.find({ category: { $size: 2 } });

// Exercise 11
db.movies.find({ ratings: { $size: 4 } });

// Execise 12
db.movies.find({ budget: { $mod: [5, 0] }, category: { $size: 2 } });

// Exercise 13
db.movies.find(
  { $or: [{ category: "sci-fi" }, { ratings: { $gt: 199 } }] },
  { _id: 0, title: 1, category: 1, ratings: 1 }
);

// Exercise 14
db.movies.find(
  {
    ratings: { $size: 4 },
    category: { $elemMatch: { $in: ["adventure", "family"] } },
    imdbRating: { $lt: 7 }
  }
);

// Exercise 15
const description_batman = "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
db.movies.updateOne(
  { title: 'Batman' },
  { $set: { description: description_batman } }
);

// Exercise 16
const description_godzilla = "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
db.movies.updateOne(
  { title: 'Godzilla' },
  { $set: { description: description_godzilla } }
);

// Exercise 17
const description_homealone = "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
db.movies.updateOne(
  { title: 'Home Alone' },
  { $set: { description: description_homealone } }
);

// Exercise 18
db.movies.find({ description: /The/ });

// Exercise 19
db.movies.find({ description: /humanity./ });

// Exercise 20
db.movies.createIndex({ description: 'text' });

// Exercise 21
db.movies.find({ $text: { $search: 'vacation' } });

// Exercise 22
db.movies.find({ $text: { $search: 'monstrous vacation' } });

// Exercise 23
db.movies.find({ $text: { $search: '\"when he is accidentally\"' } })