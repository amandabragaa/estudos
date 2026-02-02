const prompt = require("prompt-sync")();
console.log("Programa Verifica Velocidade");
const velocidadePermitida = Number(prompt("Velocidade Permitida: "));
const velocidadeCondutor = Number(prompt("Valocidade do Condutor: "));

if (velocidadeCondutor <= velocidadePermitida) {
  console.log("Status: Sem Multa");
} else {
  const maisVinte = velocidadePermitida * 1.2;
  if (velocidadeCondutor <= maisVinte) {
    console.log("Status: Multa Leve");
  } else {
    console.log("Status: Multa Grave");
  }
}
