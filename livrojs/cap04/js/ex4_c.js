const prompt = require("prompt-sync")();
console.log("Programa Paquímetro");
console.log("R$1.00 - 30min || R$1.75 - 60min || R$3.00 - 120min");
const valor = Number(prompt("Valor R$: "));

if (valor < 1) {
  console.log("Valor Insuficiente.");
  return;
}
let troco;
let tempo;
if (valor >= 3.0) {
  tempo = 120;
  troco = valor - 3.0;
} else if (valor >= 1.75) {
  tempo = 60;
  troco = valor - 1.75;
} else {
  tempo = 30;
  troco = valor - 1.0;
}
console.log(`Tempo: ${tempo}min`);
console.log(`Troco R$: ${troco.toFixed(2)}`);
