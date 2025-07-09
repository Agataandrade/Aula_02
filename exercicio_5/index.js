import ler = require("readline-sync");


let codigoProduto = ler.questionInt("Digite o código do produto (1 a 6): ");
let quantidade = ler.questionInt("Digite a quantidade desejada: ");

// O nome e o preço
let nomeProduto = "";
let precoUnitario = 0;

// Produto e o preço
switch (codigoProduto) {
  case 1:
    nomeProduto = "Cachorro Quente";
    precoUnitario = 10.00;
    break;
  case 2:
    nomeProduto = "X-Salada";
    precoUnitario = 15.00;
    break;
  case 3:
    nomeProduto = "X-Bacon";
    precoUnitario = 18.00;
    break;
  case 4:
    nomeProduto = "Bauru";
    precoUnitario = 12.00;
    break;
  case 5:
    nomeProduto = "Refrigerante";
    precoUnitario = 8.00;
    break;
  case 6:
    nomeProduto = "Suco de laranja";
    precoUnitario = 13.00;
    break;
  default:
    nomeProduto = "Código inválido";
    precoUnitario = 0;
}

// Cálculo do valor total
let valorTotal = quantidade * precoUnitario;

// Saída de dados
if (precoUnitario > 0) {
  console.log("Produto: " + nomeProduto);
  console.log("Valor total: R$ " + valorTotal.toFixed(2));
} else {
  console.log("Código de produto inválido!");
}

