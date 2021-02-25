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
let sortedArray = bubbleSort(numbers);
console.log(`\n== bonus01 ==`)
console.log("Sorted array: ", sortedArray)

// bonus 02
let sortedArrayReversed = sortedArray.reverse();
console.log(`\n== bonus02 ==`)
console.log("Sorted array reversed: ", sortedArrayReversed)
