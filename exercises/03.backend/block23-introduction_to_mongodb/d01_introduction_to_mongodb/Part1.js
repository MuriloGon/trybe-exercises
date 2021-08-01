// Ex01
db.bios.find({ _id: 8 });

// Ex02
db.bios.find({ _id: 8 }, { name: 1 });
//db.bios.findOne({ _id: 8 }, { name: 1 });
//db.bios.find({ _id: 8 }, { name: 1, _id: 1 });

// Ex03
db.bios.findOne({ _id: 8 }, { name: 1, birth: 1, _id: 0 });

// Ex04
db.bios.find({ 'name.first': 'John' }).pretty();

// Ex05
db.bios.find({}).limit(3);

// Ex06
db.bios.find({}).skip(2).limit(2);