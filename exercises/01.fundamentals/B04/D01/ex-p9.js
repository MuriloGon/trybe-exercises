/* Write a program that defines three numbers in variables at the beginning and returns
true if at least one of the three is odd. Otherwise, it returns false.
Bonus: use only one if.
* /


let a = 2, b = 2, c = 4;

// outra coisa
let r = (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) ? true : false;
console.log(r)

// usando if
if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
    console.log(true)
} else {
    console.log(false)
}