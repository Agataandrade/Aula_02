//Exemplos
//let nome = "João da Silva";
//let idade = 62;
//let primeiraDoacao = true; // true = primeira doação, false = já doou antes
//let nome = "Maria dos Anjos";
//let idade = 50;
//let primeiraDoacao = true; // true = primeira doação, false = já doou antes
//let nome = "Pedro Souza";
//let idade = 68;
//let primeiraDoacao = true; // true = primeira doação, false = já doou antes

// Exemplo usado
let nome = "Fábio Camões";
let idade = 16;
let primeiraDoacao = true; // true = primeira doação, false = já doou antes

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
