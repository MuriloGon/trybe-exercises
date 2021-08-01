// Exerise 01
db.restaurants.deleteOne({ cuisine: 'Ice Cream, Gelato, Yogurt, Ices' });

// Exercise 02
db.restaurants.deleteMany({ cuisine: 'American' });