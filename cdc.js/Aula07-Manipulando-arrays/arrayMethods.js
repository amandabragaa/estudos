
const listaDeConvidados = ["Lucas", "Carlos", "Patrícia", "Quésia", "Rafael"];

// console.log("Quantos convidados:", listaDeConvidados.length);

// push / pop / shift / unshift / includes

listaDeConvidados.push("Juliana"); // adiciona no final do array
// console.log(listaDeConvidados);

listaDeConvidados.pop(); // remove o ultimo da lista do array
// console.log(listaDeConvidados);

listaDeConvidados.unshift("Amanda"); // adiciona como 1º(0) do array
//console.log(listaDeConvidados);

listaDeConvidados.shift(); // reemover o 1º item da lista
console.log(listaDeConvidados);

console.log("O Lucas está na lista?", listaDeConvidados.includes("Lucas")); // verificação de nome na lista