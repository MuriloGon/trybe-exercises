/*
Write a program that starts with two values in two different variables: the cost
of a product and its sale value. From the values, calculate how much profit
(sales value less the cost of the product) the company will have when selling one thousand of these products.

* Note that a 20% tax is levied on the cost of the product.
* Your program should also issue an error message and terminate if any of your
input is less than zero.
* The profit of a product is the result of subtracting the sale value by the cost of the same, being
that the 20% tax is also part of the cost value.
** TotalCostValue = CostValue + TaxAboutCost
** profit = salesValue - TotalCost (profit of a product)
*/

let valorCusto = 33, valorDeVenda = 100, imposto = 0.2, unidades = 1000;
let lucroUnitario = valorDeVenda - valorCusto * (1 + imposto);
let lucroTotal = lucroUnitario * unidades;

if (valorCusto <= 0 || valorDeVenda <= 0 || imposto < 0 || unidades < 1) {
    console.log("Entre com valores válidos");
} else {
    console.log(lucroTotal);
}