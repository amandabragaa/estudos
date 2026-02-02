const prompt = require("prompt-sync")();
console.log("Programa Lados de um Triângulo");
const ladoA = Number(prompt("Lado A: "));
const ladoB = Number(prompt("Lado B: "));
const ladoC = Number(prompt("Lado C: "));

let tipo;
if (ladoA == ladoB && ladoB == ladoC && ladoA == ladoC) {
  tipo = "Equilátero";
} else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
  tipo = "Escaleno";
} else {
  tipo = "Isóceles";
}

console.log(`Lados podem formar um triângulo`);
console.log(`Tipo: ${tipo}`);
