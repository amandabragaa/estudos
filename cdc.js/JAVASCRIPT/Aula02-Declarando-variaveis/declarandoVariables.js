// let const

const primeiroValor = 60; 
const segundoValor = 40;

console.log("Somando dois valores ", primeiroValor + segundoValor);
const valorTotal = primeiroValor + segundoValor;
console.log("Valor total ",valorTotal);

let terceiroValor = 50;
console.log("terceiroValor", terceiroValor);

terceiroValor = 1000;
console.log("terceiroValor final", terceiroValor);

let comunidade = "Dev Completo";
console.log("comunidade ", comunidade)
// const comunidade = 'Dev Completo'
// const comunidade = ` Dev Completo`

comunidade = "CDC";
console.log("Comunidade ", `${comunidade}`);

// padrão camelCase para declarar variaveis 
const autorDoCurso = "Amanda Braga";
//padrão snake_case
const autora_do_curso = "Amanda Braga";

// não criar variável começando com NÚMERO
// não é recomendado criar variável começando com letra MAIÚSCULA
// não criar variável com CARACTERE ESPECIAL
// não começar uma variável com CARACTERE ESPECIAL

// é permitido const $palavras ou const _palavras = '';

// SEGUE O PADRÃO = CamelCase ou snake_case

// é permitido, mas não convém! CUIDADO COM A LÓGICA!
let x = 10;
x = "dez";