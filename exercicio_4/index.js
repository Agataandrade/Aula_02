// Teste 1 - Deve imprimir "Homem"
let palavra1 = "vertebrado";
let palavra2 = "mamífero";
let palavra3 = "onívoro";

// // Teste 2 - Deve imprimir "Vaca"
// let palavra1 = "vertebrado";
// let palavra2 = "mamífero";
// let palavra3 = "herbívoro";

// // Teste 3 - Deve imprimir "Águia"
// let palavra1 = "vertebrado";
// let palavra2 = "ave";
// let palavra3 = "carnívoro";

// // Teste 4 - Deve imprimir "Pomba"
// let palavra1 = "vertebrado";
// let palavra2 = "ave";
// let palavra3 = "onívoro";

// // Teste 5 - Deve imprimir "Lagarta"
// let palavra1 = "invertebrado";
// let palavra2 = "inseto";
// let palavra3 = "herbívoro";

// // Teste 6 - Deve imprimir "Pulga"
// let palavra1 = "invertebrado";
// let palavra2 = "inseto";
// let palavra3 = "hematófago";

// // Teste 7 - Deve imprimir "Sanguessuga"
// let palavra1 = "invertebrado";
// let palavra2 = "anelídeo";
// let palavra3 = "hematófago";

// // Teste 8 - Deve imprimir "Minhoca"
// let palavra1 = "invertebrado";
// let palavra2 = "anelídeo";
// let palavra3 = "onívoro";

let animal = "Homem";


if (palavra1 === "vertebrado") {
  if (palavra2 === "ave") {
    if (palavra3 === "carnívoro") {
      animal = "Águia";
    }
    if (palavra3 === "onívoro") {
      animal = "Pomba";
    }
  }
  if (palavra2 === "mamífero") {
    if (palavra3 === "onívoro") {
      animal = "Homem";
    }
    if (palavra3 === "herbívoro") {
      animal = "Vaca";
    }
  }
}

if (palavra1 === "invertebrado") {
  if (palavra2 === "inseto") {
    if (palavra3 === "hematófago") {
      animal = "Pulga";
    }
    if (palavra3 === "herbívoro") {
      animal = "Lagarta";
    }
  }
  if (palavra2 === "anelídeo") {
    if (palavra3 === "hematófago") {
      animal = "Sanguessuga";
    }
    if (palavra3 === "onívoro") {
      animal = "Minhoca";
    }
  }
}

console.log(animal);


