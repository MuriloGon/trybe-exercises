// Make a program that defines three variables with the values of the three internal angles of a triangle.
// Return true if the angles represent the angles of a triangle and false otherwise.
// For the angles to be a valid triangle, the sum of the three must be 180 degrees. If the
// angles are invalid, the program should return an error message.

let a = 50;
let b = 1000;
let c = 30;



let anguloInterno = a + b + c;
if (a < 0 || b < 0 || c < 0) {
    console.log("Entre com um valor válido")
} else {
    if (anguloInterno == 180) {
        console.log(`É um triângulo válido -> ${anguloInterno} graus`);
        console.log(true);
    } else {
        console.log(`Não é um triângulo válido -> ${anguloInterno} graus`);
        console.log(false);
    }
}
