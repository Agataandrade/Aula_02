import ler = require("readline-sync");

// Exemplo usado
let nome = ler.question("Digite o nome do doador: ");
let idade = ler.questionInt("Digite a idade do doador: ");
let primeiraDoacao = ler.ler.question("É a primeira doação? : ");

// Verificação das condições
if (idade < 18 || idade > 69) {
  console.log(nome + " não está apto para doar sangue!");
}

if (idade >= 18 && idade <= 59) {
  console.log(nome + " está apto para doar sangue!");
}

if (idade >= 60 && idade <= 69) {
  if (primeiraDoacao === true) {
    console.log(nome + " não está apto para doar sangue!");
  }
  if (primeiraDoacao === false) {
    console.log(nome + " está apto para doar sangue!");
  }
}
