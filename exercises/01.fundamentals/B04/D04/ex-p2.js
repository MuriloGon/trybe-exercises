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

// Item 04
console.log(`\n== Item04 ==`);
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maxChars(array) {
    let indexMaxChars = 0;
    for (let name of names) {
        if (name.length > names[indexMaxChars].length)
            indexMaxChars = array.findIndex(x => x == name);
    }
    console.log(indexMaxChars)
    return array[indexMaxChars]
}
console.log(maxChars(names))

// Item 05
console.log(`\n== Item05 ==`);
let arr3 = [2, 3, 2, 5, 8, 2, 3, 5, 5];

function repeatedNum(array) {
    let objOutput = new Object();
    // Populate an object taking the unique numbers as keys and sum up +1 when repeated
    for (let num of array) {
        if (objOutput[num.toString()] == undefined)
            objOutput[num.toString()] = 0;
        objOutput[num.toString()] += 1;
    }

    // bubblesorting algorithm to sort an array with the previous object based on the pair (key, value)
    // the algorith is sorting in crescent way based on the repeated value of the key
    let pair = Object.entries(objOutput);
    for (let n1 = 1; n1 < pair.length; n1 += 1) {
        for (let n0 = 0; n0 < pair.length; n0 += 1) {
            if (pair[n1][1] < pair[n0][1]) {
                let position = pair[n1];
                pair[n1] = pair[n0]
                pair[n0] = position
            }
        }
    }

    // TODO(murilo.gon@live.com): fix the bug that happens when there're
    // two or more number repeatead in the same amount

    // return the last item (most repeated number)
    // (0, 1) -> (key, value) -> (number-repeated, times-repeated)
    return Number(pair[pair.length-1][0])
}
console.log(repeatedNum(arr3))