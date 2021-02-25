let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Item 01
console.log(`\n== Item01 ==`)
for (let number of numbers) console.log(number);

// Item 02
console.log(`\n== Item02 ==`)
let sumResult = 0;
for (let number of numbers) sumResult += number;
console.log("The total array sum is: ", sumResult)

// Item 03
console.log(`\n== Item03 ==`)
let average = sumResult / numbers.length;
console.log("The average value is: ", average)

// Item 04
console.log(`\n== Item04 ==`)
console.log(average > 20 ? "valor maior que 20" : "valor menor ou igual a 20")

// Item 05
console.log(`\n== Item05 ==`)
let maxNumber = null;
for (let number of numbers) {
    if (number > maxNumber)
        maxNumber = number;
}
console.log("Max number: ", maxNumber)

// Item 06
console.log(`\n== Item06 ==`)
let oddNums = 0;
for (let number of numbers) if (number % 2 == 1) oddNums++;
if (oddNums === 0)
    console.log("No odd number has been found");
else console.log("Odd numbers: ", oddNums)

// Item 07
console.log(`\n== Item07 ==`)
let minNumber = numbers[0];
for (let number of numbers) {
    if (number < minNumber)
        minNumber = number;
}
console.log("Min number: ", minNumber)

// Item 08
console.log(`\n== Item08 ==`)
let twentyFive = [];
for (let x = 1; x <= 25; x++) twentyFive.push(x);
console.log('Array 1-25: ', twentyFive);