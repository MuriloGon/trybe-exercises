// Import collection
// mongoimport --db=sample --collection=books ~/Downloads/books.json

// Ex07
db.books.count();

// Ex08
db.books.find({ status: 'PUBLISH' }).count();

// Ex09
db.books.find({}, { title: 1, isbn: 1, pageCount: 1, _id: 0 });

// Ex10
db.books.find({ status: 'MEAP' }, { title: 1, authors: 1, status: 1, _id: 0 }).skip(5).limit(10);