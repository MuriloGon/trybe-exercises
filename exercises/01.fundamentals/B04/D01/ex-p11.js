// A person who works with a formal contract in Brazil is deducted from his salary
// gross INSS and IR. Make a program that, given a gross salary, calculates the net to be received.
// The notation for a salary of R $ 1500.10, for example, must be 1500.10. For the tracks
// tax, use the following references:
// INSS
// Gross income up to R $ 1,556.94: 8% rate
// Gross income from R $ 1,556.95 to R $ 2,594.92: 9% rate
// Gross income from R $ 2,594.93 to R $ 5,189.82: 11% rate
// Gross income above R $ 5,189.82: maximum rate of R $ 570.88
// GO
// Up to R $ 1,903.98: exempt from income tax
// From R $ 1,903.99 to 2,826.65: rate of 7.5% and installment of R $ 142.80 to be deducted from tax
// From R $ 2,826.66 to R $ 3,751.05: rate of 15% and installment of R $ 354.80 to be deducted from tax
// From R $ 3,751.06 to R $ 4,664.68: rate of 22.5% and installment of R $ 636.13 to be deducted from tax
// Above R $ 4,664.68: rate of 27.5% and installment of R $ 869.36 to be deducted from tax.

/* INSS */
function INSS(salario) {
    let aliquota;
    if (salario <= 1556.94) {
        aliquota = salario * 8 / 100;
    }
    else if (salario >= 1556.95 && salario <= 2594.92) {
        aliquota = salario * 9 / 100;
    }
    else if (salario >= 2594.93 && salario <= 5189.82) {
        aliquota = salario * 11 / 100;
    }
    else if (salario > 5189.82) {
        aliquota = 570.88;
    }
    return aliquota;
}

/* IR */
function IR(salario, aliquota) {
    let salarioBase = salario - aliquota;
    let iR;
    if (salarioBase < 1903.98) {
        iR = 0;
    } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        iR = salarioBase * 7.5 / 100 - 142.80;

    } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        iR = salarioBase * 15 / 100 - 354.80;

    } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        iR = salarioBase * 22.5 / 100 - 636.13;

    } else if (salarioBase > 4664.68) {
        iR = salarioBase * 27.5 / 100 - 869.36;
    }
    return iR;
}

function salarioLiquido(salario) {
    let salarioLiquido = salario - INSS(salario) - IR(salario, INSS(salario));
    console.log("Alíquota do INSS -> ", INSS(salario));
    console.log("Imposto de renda-> ", IR(salario, INSS(salario)));
    console.log("Alíquota do INSS -> ", salarioLiquido);

    return salarioLiquido;
}

salarioLiquido(3000);