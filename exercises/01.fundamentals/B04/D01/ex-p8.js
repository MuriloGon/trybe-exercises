/*
Write a program that defines three numbers in variables at the beginning and return
true if at least one of the three is even. Otherwise, it returns false.
* Bonus: use only an if.
*/

let a = 3, b = 2, c = 7;

// outra coisa
let r = (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) ? true : false;
console.log(r)

// usando if
if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true)
} else {
    console.log(false)
}