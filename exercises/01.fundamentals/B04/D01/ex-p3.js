// Make a program that returns the largest of three numbers. Define three variables at the 
// beginning of the program with the values to be compared.

let a = 4, b = 222, c = 13;

if (a > (b && c)) {
    console.log("Largest: a");
} else if (b > (a && c)) {
    console.log("Largest: b");
} else if (c > (a && b)) {
    console.log("Largest: c");

}