// Write a program that converts a grade to a percentage (0 to 100)
// on concepts from A to F. Follow these rules:
// Percentage> = 90 -> A
// Percentage> = 80 -> B
// Percentage> = 70 -> C
// Percentage> = 60 -> D
// Percentage> = 50 -> E
// Percentage <50 -> F
// The program should return an error message and close if the grade passed is less
// than 0 or greater than 100.

let nota = 90;
if (nota < 0 || nota > 100) {
    console.log("Caso inválido")
} else {
    if (nota < 50) {
        console.log("F Grade");
    } else if (nota < 60) {
        console.log("E Grade");
    } else if (nota < 70) {
        console.log("D Grade");
    } else if (nota < 80) {
        console.log("C Grade");
    } else if (nota < 90) {
        console.log("B Grade");
    } else if (nota >= 90) {
        console.log("A Grade");
    }
}
