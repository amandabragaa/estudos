
// const nomes = ["Maria", "Beatriz", "Matheus"];

// const nome1 = nomes[0];
// const nome2 = nomes[1];
// const nome3 = nomes[2];

// const [nome1, nome2, nome3] = nomes;

// console.log("Nome 1", nome1);
// console.log("Nome 2", nome2);
// console.log("Nome 3", nome3);

const casais = [["Matheus", "Beatriz"], ["Amanda", "Lucas"]];

// const [casal1, casal2] = casais;

// console.log("Casal 1", casal1);
// console.log("Casal 1", casal2);

const [[nome1,nome2], [nome3, nome4]] = casais;

// console.log(`Casal 1 ${nome1} e ${nome2}`);
// console.log(`Casal 2 ${nome3} e ${nome4}`);

// const pessoa = {
// 	nome: "Gabriela",
// 	sobrenome: "Helena",
// 	familia: ["Junior", "Talita", "Tais"]
// }

// const {nome: primeiroNome, sobrenome: segundoNome, familia: membroFamilia} = pessoa;
// console.log(primeiroNome, segundoNome, membroFamilia);

const pessoa = {
	nome: "Gabriela",
	sobrenome: "Helena",
	familia: ["Junior", "Talita", "Tais"]
}

const {nomeCompleto: {nome: primeiroNome, ssobrenome}, familia} = pessoa;