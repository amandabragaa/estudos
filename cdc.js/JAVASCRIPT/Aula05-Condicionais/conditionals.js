// duas condições 

const idadeMaria = 16;
const maiorIdade = 18;

if (idadeMaria >= 18) {
    console.log('Maria pode dirigir');
} else {
    const anosFaltantes = maiorIdade - idadeMaria
    // console.log('Maria NÃO pode dirigir! Falta ' + anosFaltantes + ' anos para atingir a maior idade.');
    console.log('Maria NÃO pode dirigir');
    console.log(`Faltam ${anosFaltantes} anos para atingir a maior idade`);
}

// operadores ternários ? se sim : se não
// simplificado quando não precisar de muito códgo

// idadeMaria >= maiorIdade 
//     ? console.log("Maria pode dirigir") 
//     : console.log("Maria NÃO pode dirigir");

console.log("----------------------------------------");

// várias consições

const idadePessoa = prompt("Qual a sua idade? Ex.18");

// 0 a 12 anos -> infância
// 13 a 17 anos -> adolecêncica
// 18 a 25 anos -> jovem adulto
// 26 a 59 anos -> adulto 
// mais que 60 anos -> idoso

if (idadePessoa >=0 && idadePessoa <= 12) {
    console.log("Infância/criança");
    alert("Você está na infância");
} else if (idadePessoa >= 13 && idadePessoa <= 17) {
    console.log("Adolecênte");
    alert("Você está na adolecência");
} else if (idadePessoa >= 18 && idadePessoa <= 25) {
    console.log("Jovem Adulto");
    alert("Você é um jovem adulto");
} else if (idadePessoa >= 26 && idadePessoa <= 59) {
    console.log("Adulto");
    alert("Você é um adulto");
} else {
    console.log("Idoso");
    alert("Você é um idoso");
}

// Adição dos alert por minha conta...

// ifs idependenes são uteis quando as duas condições são verdadeiras.
const x = 20;

if (x % 2 === 0) {
    console.log(`O número ${x} é par`);
};

if (x % 5 === 0){
    console.log(`O número ${x} é  múltiplo de 5`);
};

console.log("----------------------------------------");

const diaDaSemana = 3;
let nomeDoDia;

// só trabalha com valores exatos
switch (diaDaSemana) {
    case 0:
        nomeDoDia = "Dominigo";
    break;
    case 1:
        nomeDoDia = "Segunda";
    break;
    case 2:
        nomeDoDia = "Terça";
    break;
    case 3:
        nomeDoDia = "Quarta";
    break;
    case 4:
        nomeDoDia = "Quinta";
    break;
    case 5:
        nomeDoDia = "Sexta";
    break;
    case 6:
        nomeDoDia = "Sábado";
    break;
}

console.log("Dia da Semana: " + nomeDoDia);

