import ler = require("readline-sync");

// Entrada de dados
let numero = ler.questionInt("Digite um número: ");

// Variáveis para armazenar o resultado
let parOuImpar = '';
let positivoOuNegativo = '';

// Verifica se é par ou ímpar
if (numero % 2 === 0) {
  parOuImpar = 'par';
} else {
  parOuImpar = 'ímpar';
}

// Verifica se é positivo ou negativo
if (numero >= 0) {
  positivoOuNegativo = 'positivo';
} else {
  positivoOuNegativo = 'negativo';
}

// Saída de dados
console.log(`O Número ${numero} é ${parOuImpar} e ${positivoOuNegativo}!`);
