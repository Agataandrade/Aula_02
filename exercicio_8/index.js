import ler = require("readline-sync");

// Saldo inicial
let saldo = 1000.00;

// Entrada de dados: operação
let operacao = ler.questionInt("Digite a operação (1 = Saldo, 2 = Saque, 3 = Depósito): ");

let valor = 0;

// Se for saque ou depósito, pede o valor
if (operacao === 2 || operacao === 3) {
  valor = ler.questionFloat("Digite o valor: ");
}

switch (operacao) {
  case 1:
    console.log("\nOperação - Saldo");
    console.log("Saldo: R$ " + saldo.toFixed(2));
    break;

  case 2:
    console.log("\nOperação - Saque");
    if (valor <= saldo) {
      saldo -= valor;
      console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    } else {
      console.log("Saldo Insuficiente!");
    }
    break;

  case 3:
    console.log("\nOperação - Depósito");
    saldo += valor;
    console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    break;

  default:
    console.log("\nOperação Inválida!");
    break;
}
