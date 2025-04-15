const fichaDaAmanda = {
    nome: "Amanda Braga",
    idade: 26,
    profissao: "Migrando de Educação Física para Programadora",
    temFilhos: false 

    // separa um em cada linha por identação do código
    // os itens que tem dentro do objeto chama propriedades
};

console.log(fichaDaAmanda);

console.log('Nome: ' + fichaDaAmanda.nome); 
// variável pega somente a propriedade dentro do objeto que queremos
// quando se tem uma string não é soma é CONCATENAÇÃO.

// Tipos Primitios const = depois que declara uma variável você não consegue alterar ela.
// Como Objeto não é uma tipo primitivos, consegue modificar as propriedades o ojeto.
// Não consegue reatribuir um valor de um objeto inteiro, mas pode adicionar e reemver propriedades

// Adicionar Proprriedades
fichaDaAmanda.moto = "Fan 125";
console.log('Ficha da Amanda', fichaDaAmanda);

// Deletar Propriedades
delete fichaDaAmanda.moto;
console.log("Ficha da Amanda", fichaDaAmanda);

// Imprimir a variável que deletou 
console.log('carro ' + fichaDaAmanda.moto);

// Quando você manipula um objeto ele altera todas as referência desse objeto, indepêndente da parte do código que você fez a alteração 
// Tipos primitivos = imutaveis/ uma nova cópia 
// Object = mutáveis / mesmo espaço da memória

// Passar variáveis para dentro do object/ chega no mesmo resultado + de outra forma.
const nomeA = "Amanda Braga";
const idadeA = 26;
const profissaoA = "Migrando de Educação Física para Programadora";
const temFilhosA = false;

const fichaDaAmandaBraga = {
    nomeA,
    idadeA,
    profissaoA,
    temFilhosA
};

console.log("Ficha da Amanda",fichaDaAmandaBraga)