import ler = require("readline-sync");

// Entrada de dados
let numero1 = ler.questionFloat("Digite o primeiro número: ");
let numero2 = ler.questionFloat("Digite o segundo número: ");
let operacao = ler.questionInt("Digite a operação (1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão): ");

// Armazenar o resultado
let resultado: number | null = 0;
let simbolo = "";


switch (operacao) {
  case 1:
    resultado = numero1 + numero2;
    simbolo = "+";
    break;
  case 2:
    resultado = numero1 - numero2;
    simbolo = "-";
    break;
  case 3:
    resultado = numero1 * numero2;
    simbolo = "*";
    break;
  case 4:
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
      simbolo = "/";
    } else {
      console.log("Não é possível dividir por zero!");
      simbolo = "/";
      resultado = null;
    }
    break;
  default:
    console.log("Operação Inválida!");
    resultado = null;
    break;
}

// Exibe o resultado, se válido
if (resultado !== null && simbolo !== "") {
  console.log(`${numero1} ${simbolo} ${numero2} = ${resultado}`);
}
