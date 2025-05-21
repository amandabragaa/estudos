console.log("------------------------------------------");
// AND / OR / NOT

console.log("Amanda foi parada em uma blitz");

const idadeMaria = 18;
const mariaTemCNH = false

// && AND precisa que as duas sejam true
console.log("Amanda vai ser presa ?", idadeMaria >= 18 && mariaTemCNH === false);


console.log("------------------------------------------");

// || OR precisa que uma delas seja true
console.log("Maria foi para a balada e na entrada precisava mostrar documento");

const mariaTemRG = true

console.log("Maria levou o seu RG?", mariaTemRG);

console.log("Maria é maor de idade?",idadeMaria >= 18);

console.log("Maria coseguiu comprovar que é maior de idade?", mariaTemCNH === true || mariaTemRG === true);
console.log("Maria conseguiu entrar!");

console.log("------------------------------------------")

// ! NOT
const gostaDeBeber = true;

const mariaGostaDeBeber = !gostaDeBeber

console.log("Maria gosta de beber?", mariaGostaDeBeber);