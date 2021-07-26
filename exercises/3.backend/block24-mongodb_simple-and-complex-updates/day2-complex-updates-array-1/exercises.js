// Exercise 01
db.movies.updateOne({ title: 'Batman' }, { $push: { category: 'superhero' } });

// Exercise 02
db.movies.updateOne({
  title: 'Batman'
}, {
  $push: {
    category: {
      $each: ['villain', 'comic-based']
    }
  }
});

// Exercise 03
db.movies.updateOne(
  { title: 'Batman' },
  {
    $pull: {
      category: 'action'
    }
  }
);

// Exercise 04
db.movies.updateOne(
  { title: 'Batman' },
  { $pop: { category: -1 } }
);

// Exercise 05
db.movies.updateOne(
  { title: 'Batman' },
  { $pop: { category: 1 } }
);

// Exercise 06
db.movies.updateOne(
  { title: 'Batman' },
  { $addToSet: { category: 'action' } }
);

// Exercise 07
db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $addToSet: { category: '90\'s' } }
);

// Exercise 08
const cast = [
  { "actor": "Macaulay Culkin", "character": "Kevin" },
  { "actor": "Joe Pesci", "character": "Harry" },
  { "actor": "Daniel Stern" }
];
db.movies.updateOne({ title: 'Home Alone' }, {
  $set: { cast }
})

// Exercise 09
db.movies.updateOne({ title: 'Home Alone', 'cast.actor': 'Daniel Stern' },
  {
    $set: {
      'cast.$.character': 'Marv'
    }
  }
);

// Exercise 10
const cast2 = [
  {
    "character": "Batman"
  },
  {
    "character": "Alfred"
  },
  {
    "character": "Coringa"
  }
];
db.movies.updateOne({ title: 'Batman' },
  {
    $set: { cast: cast2 }
  }
);

// Exercise 11
db.movies.updateOne({ title: 'Batman', 'cast.character': 'Batman' },
  { $set: { 'cast.$.actor': ['Christian Bale'] } }
);
db.movies.updateOne({ title: 'Batman', 'cast.character': 'Alfred' },
  { $set: { 'cast.$.actor': ['Michael Caine'] } }
);
db.movies.updateOne({ title: 'Batman', 'cast.character': 'Coringa' },
  { $set: { 'cast.$.actor': ['Heath Ledger'] } }
);

// Exercise 12
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: {
      "cast.$.actor": {
        $each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
        $sort: 1,
      },
    },
  },
);
