// Descrição
//let numero1 = 10.0;
//let numero2 = 5.0;
//let operacao = 1; 
//let numero1 = 10.0;
//let numero2 = 5.0;
//let operacao = 2; 
//let numero1 = 10.0;
//let numero2 = 5.0;
//let operacao = 4; 
let numero1 = 10.0;
let numero2 = 5.0;
let operacao = 3;  // 1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão

// Armazenar o resultado
let resultado = 0;
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
