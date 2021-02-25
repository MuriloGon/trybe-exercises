let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Item 01
console.log(`\n== Item01 ==`)
for (let number of numbers) console.log(number);

// Item 02
console.log(`\n== Item02 ==`)
let sumResult = 0;
for (let number of numbers) sumResult += number;
console.log("The total array sum is: ", sumResult)
