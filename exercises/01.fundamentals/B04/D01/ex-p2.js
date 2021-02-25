// Make a program that returns the greater of two numbers. Set at the beginning of
// program two variables with the values to be compared.

let a = 18;
let b = 8;

function compare2Value(a, b) {
    if (a > b) {
        console.log("a maior", a);
    } else if (a < b) {
        console.log("b maior", b);
    } else {
        console.log("a=b", a)
    }
}

compare2Value(a, b);