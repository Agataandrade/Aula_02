// Saldo inicial
let saldo = 1000.00;

// Operação a ser executada (1 = saldo, 2 = saque, 3 = depósito)
let operacao = 3;  // 

// Valor a ser sacado ou depositado (somente usado nos casos 2 e 3)
let valor = 500.00;  // Altere esse valor conforme necessário

// Executa a operação
switch (operacao) {
  case 1:
    console.log("Operação - Saldo");
    console.log("Saldo: R$ " + saldo.toFixed(2));
    break;

  case 2:
    console.log("Operação - Saque");
    if (valor <= saldo) {
      saldo -= valor;
      console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    } else {
      console.log("Saldo Insuficiente!");
    }
    break;

  case 3:
    console.log("Operação - Depósito");
    saldo += valor;
    console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    break;

  default:
    console.log("Operação Inválida!");
    break;
}
