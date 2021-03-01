// Item 01
console.log(`\n== Item01 ==`);

function checkPalindrome(str) {
    if (typeof (str) != "string") return null;

    let len = str.length;
    let isPalidrome = true;

    for (let letter = 0; letter < len; letter += 1) {
        isPalidrome = isPalidrome && (str[letter] === str[len - 1 - letter]);
    }
    return isPalidrome;
}
console.log('arara -> ', checkPalindrome('arara'))
console.log('desenvolvimento -> ', checkPalindrome('desenvolvimento'))

// Item 02
console.log(`\n== Item02 ==`);
let arr = [2, 3, 6, 7, 10, 1];
function maxIndex(array) {
    let max = {
        num: array[0],
        index: 0
    }
    for (let indexArr in array) {
        if (array[indexArr] > max.num) {
            max.index = indexArr;
            max.num = array[indexArr];
        }
    }
    return max
}
console.log('index -> ', minIndex(arr).index)
console.log('num -> ', minIndex(arr).num)

// Item 03
console.log(`\n== Item03 ==`);
let arr2 = [2, 4, 6, 7, 10, 0, -3];
function minIndex(array) {
    let min = {
        num: arr[0],
        index: 0
    }
    for (let indexArr in array) {
        if (array[indexArr] < min.num) {
            min.index = indexArr;
            min.num = array[indexArr];
        }
    }
    return min
}
console.log('index -> ', minIndex(arr2).index)
console.log('num -> ', minIndex(arr2).num)