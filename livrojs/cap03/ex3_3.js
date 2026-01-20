const prompt = require("prompt-sync")();
const salario = Number(prompt("Qual seu sálario? "));
const tempo = Number(prompt("Quanto tempo de empresa? "));
const quadrienio = Math.floor(tempo / 4);
const acrescimo = (salario * quadrienio) / 100;
const novoSalario = salario + acrescimo;
console.log(`Quadrienios: R$ ${quadrienio}`);
console.log(`Salário Final R$: ${novoSalario.toFixed(2)}`);
