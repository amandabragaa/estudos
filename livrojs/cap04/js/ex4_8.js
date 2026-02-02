const prompt = require("prompt-sync")();
const valorTotal = Number(prompt("Valor da Compra: "));
const aux = Math.floor(valorTotal / 20);
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
const valorParcela = valorTotal / parcelas;
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`);
