
const listaDeConvidados = ["Amanda", "Lucas", "Carlos", "Patrícia", "Quésia", "Rafael"];

console.log("Amanda e Lucas casaram e convidaram:",listaDeConvidados); 
console.log("O número de convidados é:", listaDeConvidados.length);
// numaros de convidados
console.log("O primeiro convidado é:", listaDeConvidados[0]);
// sabendo quem é o primeiro convidado
// a primeira posição de uma array é o 0
console.log("O último convidado é:", listaDeConvidados[listaDeConvidados.length - 1]);
//  descobrir a  ultima pessoa de uma lista  númerosa

console.log("Amanda está em qual indice do nosso array?", listaDeConvidados.indexOf("Amanda"));
console.log("A Amanda estáem qual número da lista", listaDeConvidados.indexOf("Amanda")  + 1);

// dentro do array pode ter varias coisas
const arrayQualquer = ["Amanda", "true", "26", {valor1: 10, valor2: 20}];
console.log(arrayQualquer);