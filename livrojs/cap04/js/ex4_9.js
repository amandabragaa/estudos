const prompt = require("prompt-sync")();
const centena = Number(prompt("Digite um número (centena): "));
if (centena < 100 || centena >= 1000) {
  console.log("Erro...Deve ser uma centena!");
  return;
}

const num1 = Math.floor(centena / 100);
const sobra = centena % 100;
const num2 = Math.floor(sobra / 10);
const num3 = sobra % 10;

console.log(`Invertido: ${num3} ${num2} ${num1}`);
