const prompt = require("prompt-sync")();
console.log("Programa Par ou Ímpar");
const number = Number(prompt("Número: "));
// let result;
// if (result % 2 == 0) {
//   console.log(`${number} é Par`);
// } else {
//   console.log(`${number} é Impar`);
// }
const result = number % 2 == 0 ? "par" : "impar";
console.log(`${number} é ${result}`);
