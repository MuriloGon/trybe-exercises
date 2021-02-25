// Write a program that is named after a chess piece and returns the movements it makes.
// As a challenge, make the program work so much if you receive the name of a piece with capital letters
// as well as lowercase letters, without increasing the number of conditionals.
// 1 As a tip, you can search for a function that makes a string get all
// the lower case letters.
// 2 If the part passed is invalid, the program should return an error message.
// 3 Example: bishop -> diagonals

let peça = 'rainha';

switch (peça.toLowerCase()) {
    case 'rei':
        console.log('Movimentos do rei')
        break;

    case 'rainha':
        console.log("Movimentos do rainha");
        break;

    default:
        console.log("Peça inválida");
        break;
}