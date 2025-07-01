// Descrição
let nomeColaborador = "João da Silva";  // Nomes
let codigoCargo = 1;                    // Cargos
let salario = 10000.00;                 // Salário atual
//let nomeColaborador = "Maria dos Anjos";  
//let codigoCargo = 5;                    
//let salario = 2000.00;                

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
