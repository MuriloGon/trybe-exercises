// Exercise 14
db.xmen.updateMany({ class: 'unknown' }, {
  $unset: {
    class: ''
  }
})

// Exercise 15
db.xmen.updateMany({}, {
  $rename: {
    name: 'hero_name',
    true_name: 'full_name',
  },
  $set: {
    power: 100
  }
})

// Exercise 16
db.xmen.updateMany({ class: /omega|gama/i }, { $max: { power: 500 } })

// Exercise 17
db.xmen.updateMany({ class: /gama/i }, { $min: { power: 300 } })

// Exercise 18
db.xmen.updateMany({ class: { $exists: false } }, {
  $inc: {
    power: -100
  }
});

// Exercise 19
db.xmen.updateMany(
  {
    $or: [
      { occupation: 'Senior Staff', power: { $gt: 100 } },
      { occupation: 'Junior Staff', power: { $gt: 200 } },
    ]
  },
  {
    $set: {
      areas: ["Students Room"]
    }
  }
);

// Exercise 20
db.xmen.updateMany(
  {
    occupation: 'Junior Staff',
    areas: { $exists: false }
  },
  {
    $set: {
      areas: ["Outside"]
    }
  }
);
