import ler = require("readline-sync");

// ===============================
// EXEMPLO 1
// A = 2, B = 4, C = 5
// Esperado: Soma > C
// ===============================
let A1 = ler.questionInt("Digite o valor de A1: ");
let B1 = ler.questionInt("Digite o valor de B1: ");
let C1 = ler.questionInt("Digite o valor de C1: ");
let soma1 = A1 + B1;

console.log("EXEMPLO 1:");
console.log(`${A1} + ${B1} = ${soma1}`);

if (soma1 > C1) {
  console.log(`${soma1} > ${C1}`);
  console.log("A Soma de A + B é Maior do que C");
}

if (soma1 < C1) {
  console.log(`${soma1} < ${C1}`);
  console.log("A Soma de A + B é Menor do que C");
}

if (soma1 === C1) {
  console.log(`${soma1} = ${C1}`);
  console.log("A Soma de A + B é Igual a C");
}

console.log("\n"); 

// ===============================
// EXEMPLO 2
// A = 2, B = 2, C = 5
// Esperado: Soma < C
// ===============================
let A1 = ler.questionInt("Digite o valor de A1: ");
let B1 = ler.questionInt("Digite o valor de B1: ");
let C1 = ler.questionInt("Digite o valor de C1: ");
let soma2 = A2 + B2;

console.log("EXEMPLO 2:");
console.log(`${A2} + ${B2} = ${soma2}`);

if (soma2 > C2) {
  console.log(`${soma2} > ${C2}`);
  console.log("A Soma de A + B é Maior do que C");
}

if (soma2 < C2) {
  console.log(`${soma2} < ${C2}`);
  console.log("A Soma de A + B é Menor do que C");
}

if (soma2 === C2) {
  console.log(`${soma2} = ${C2}`);
  console.log("A Soma de A + B é Igual a C");
}

console.log("\n");

// ===============================
// EXEMPLO 3
// A = 2, B = 2, C = 4
// Esperado: Soma = C
// ===============================
let A1 = ler.questionInt("Digite o valor de A1: ");
let B1 = ler.questionInt("Digite o valor de B1: ");
let C1 = ler.questionInt("Digite o valor de C1: ");
let soma3 = A3 + B3;

console.log("EXEMPLO 3:");
console.log(`${A3} + ${B3} = ${soma3}`);

if (soma3 > C3) {
  console.log(`${soma3} > ${C3}`);
  console.log("A Soma de A + B é Maior do que C");
}

if (soma3 < C3) {
  console.log(`${soma3} < ${C3}`);
  console.log("A Soma de A + B é Menor do que C");
}

if (soma3 === C3) {
  console.log(`${soma3} = ${C3}`);
  console.log("A Soma de A + B é Igual a C");
}
