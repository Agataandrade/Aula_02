import ler = require("readline-sync");

// Entrada de dados
let nomeColaborador = ler.question("Digite o nome do colaborador: ");
let codigoCargo = ler.questionInt("Digite o código do cargo (1 a 6): ");
let salario = ler.questionFloat("Digite o salário atual: ");

// O nome do cargo e o percentual
let nomeCargo = "";
let percentualReajuste = 0;

// Cargo e reajuste
switch (codigoCargo) {
  case 1:
    nomeCargo = "Gerente";
    percentualReajuste = 0.10;
    break;
  case 2:
    nomeCargo = "Vendedor";
    percentualReajuste = 0.07;
    break;
  case 3:
    nomeCargo = "Supervisor";
    percentualReajuste = 0.09;
    break;
  case 4:
    nomeCargo = "Motorista";
    percentualReajuste = 0.06;
    break;
  case 5:
    nomeCargo = "Estoquista";
    percentualReajuste = 0.05;
    break;
  case 6:
    nomeCargo = "Técnico de TI";
    percentualReajuste = 0.08;
    break;
  default:
    nomeCargo = "Código inválido";
}

// Cálculo do novo salário
let novoSalario = salario + (salario * percentualReajuste);

// Resultado
if (nomeCargo !== "Código inválido") {
  console.log("Nome do colaborador: " + nomeColaborador);
  console.log("Cargo: " + nomeCargo);
  console.log("Salário: R$ " + novoSalario.toFixed(2));
} else {
  console.log("Código de cargo inválido!");
}
