let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("Original array", numbers)

function bubbleSort(array, case_ = "+") {
    let output = array;

    for (let i = 1; i < output.length; i++) {
        for (let j = 0; j < i; j++) {
            if (output[i] < output[j]) {
                let position = output[i];

                output[i] = output[j];
                output[j] = position;
            }
        }
    };

    return output
}

// bonus 01
console.log(`\n== bonus01 ==`);
let sortedArray = bubbleSort(numbers);
console.log("Sorted array: ", sortedArray)

// bonus 02
console.log(`\n== bonus02 ==`)
let sortedArrayReversed = sortedArray.reverse();
console.log("Sorted array reversed: ", sortedArrayReversed)

//bonus 03
console.log(`\n== bonus03 ==`)
let bonus3Array = []
for (let n = 0; n < numbers.length; n++) {
    if (numbers[n + 1] != (null || undefined)) {
        bonus3Array.push(numbers[n] * numbers[n + 1]);
    } else bonus3Array.push(numbers[n] * 2);
}
console.log("Bonus 3 array ", bonus3Array);