const prompt = require("prompt-sync")();
const racao = Number(prompt(" Peso da ração (kg): "));
const gramas = Number(prompt("Consumo Diário (gr): "));
const diario = Math.floor((racao * 1000) / gramas);
const sobra = (racao * 1000) % gramas;
console.log(`Duração: ${diario}`);
console.log(`Sobra: ${sobra}`);
